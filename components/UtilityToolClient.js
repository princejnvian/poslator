"use client";

import { useMemo, useState } from "react";
import ResumeBuilderClient from "@/components/ResumeBuilderClient";

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function makeCanvasImage(file, callback) {
  const url = URL.createObjectURL(file); const image = new Image();
  image.onload = () => { callback(image, url); }; image.onerror = () => URL.revokeObjectURL(url); image.src = url;
}

export default function UtilityToolClient({ tool }) {
  if (tool.kind === "resume-builder") return <ResumeBuilderClient tool={tool} />;
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState("1200");
  const [height, setHeight] = useState("1200");
  const [quality, setQuality] = useState(75);
  const [keepRatio, setKeepRatio] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [style, setStyle] = useState("Helpful and informative");
  const [followers, setFollowers] = useState("10000");
  const [likes, setLikes] = useState("500");
  const [comments, setComments] = useState("35");

  const wordStats = useMemo(() => {
    const trimmed = text.trim();
    return { words: trimmed ? trimmed.split(/\s+/).length : 0, chars: text.length, noSpaces: text.replace(/\s/g, "").length, sentences: trimmed ? (trimmed.match(/[.!?]+(?=\s|$)/g) || []).length : 0 };
  }, [text]);
  const engagement = Number(followers) > 0 ? ((Math.max(0, Number(likes) || 0) + Math.max(0, Number(comments) || 0)) / Number(followers) * 100) : 0;

  function onFileChange(nextFile) {
    if (!nextFile) return;
    if (!nextFile.type.startsWith("image/")) { setMessage("Please choose a valid image file."); return; }
    if (preview) URL.revokeObjectURL(preview);
    setFile(nextFile); setPreview(URL.createObjectURL(nextFile)); setMessage("");
    const img = new Image(); const dimensionUrl = URL.createObjectURL(nextFile); img.onload = () => { setWidth(String(img.naturalWidth)); setHeight(String(img.naturalHeight)); URL.revokeObjectURL(dimensionUrl); }; img.onerror = () => URL.revokeObjectURL(dimensionUrl); img.src = dimensionUrl;
  }
  function processImage() {
    if (!file) { setMessage("Choose an image first."); return; }
    setBusy(true); setMessage("");
    makeCanvasImage(file, (img, originalUrl) => {
      const canvas = document.createElement("canvas");
      let w = Math.max(1, parseInt(width, 10) || img.naturalWidth), h = Math.max(1, parseInt(height, 10) || img.naturalHeight);
      if (tool.kind === "crop") { const side = Math.min(img.naturalWidth, img.naturalHeight); canvas.width = side; canvas.height = side; canvas.getContext("2d").drawImage(img, (img.naturalWidth-side)/2, (img.naturalHeight-side)/2, side, side, 0, 0, side, side); }
      else {
        if (tool.kind === "resize" && keepRatio) { const ratio = img.naturalWidth / img.naturalHeight; if (w / h > ratio) w = Math.round(h * ratio); else h = Math.round(w / ratio); }
        canvas.width = Math.min(w, 6000); canvas.height = Math.min(h, 6000);
        const ctx = canvas.getContext("2d");
        if (tool.kind === "convert-jpg") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,canvas.width,canvas.height); }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      const isPng = tool.kind === "convert-png" || (tool.kind === "crop" && file.type === "image/png");
      const mime = isPng ? "image/png" : "image/jpeg";
      const q = tool.kind === "compress" ? quality / 100 : 0.92;
      canvas.toBlob((blob) => {
        URL.revokeObjectURL(originalUrl); setBusy(false);
        if (!blob) { setMessage("Could not process this image. Try another file."); return; }
        const ext = isPng ? "png" : "jpg";
        saveBlob(blob, `${file.name.replace(/\.[^.]+$/, "")}-poslator.${ext}`);
        setMessage(`Done! Downloaded ${formatBytes(blob.size)}${blob.size < file.size ? ` (saved ${Math.round((1-blob.size/file.size)*100)}% compared with the original)` : ""}. Your image was processed in this browser.`);
      }, mime, q);
    });
  }
  async function copy(value) { try { await navigator.clipboard.writeText(value); setMessage("Copied to clipboard."); } catch { setMessage("Copy was blocked by the browser. Select the result and copy it manually."); } }
  function generatedOutput() {
    const clean = topic.trim();
    if (!clean) { setMessage("Enter a topic first."); return; }
    const words = clean.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter(Boolean);
    const unique = [...new Set([...words, "explained", "guide", "tips", "tutorial", "for beginners", "how to", "step by step", "things to know", "best practices", "complete guide", "quick tips", "common mistakes", "what you need to know"])];
    if (tool.kind === "youtube-tags") return unique.slice(0, 15).join(", ");
    if (tool.kind === "youtube-hashtags") return [...new Set([clean, ...words.slice(0, 5)].map((s) => "#" + s.toLowerCase().replace(/[^a-z0-9]/g, "")))].filter((s) => s.length > 1).slice(0, 8).join(" ");
    if (tool.kind === "youtube-titles") return [
      `${clean}: What You Need to Know`, `How to ${clean} (Step-by-Step Guide)`, `${clean} Explained Simply`, `7 Things to Know About ${clean}`, `${clean}: Beginner's Guide & Best Tips`, `The Truth About ${clean}`
    ].join("\n");
    return `${clean} — ${style}\n\nIn this video, we cover ${clean.toLowerCase()} and the key points you should know${audience.trim() ? ` if you're ${audience.trim()}` : ""}. Watch until the end for practical takeaways.\n\n⏱️ Chapters\n00:00 Introduction\n00:30 Main points\n02:00 Tips and examples\n\nIf you found this helpful, consider liking the video and subscribing for more.\n\n${[...new Set(words)].slice(0,5).map((w)=>"#"+w).join(" ")}\n\nNote: This is a starting draft. Review it for accuracy and customize it to match your actual video.`;
  }
  const isImage = ["resize", "compress", "convert-png", "convert-jpg", "crop"].includes(tool.kind);
  const isYoutube = tool.kind.startsWith("youtube-");
  const [outputVisible, setOutputVisible] = useState(false);
  const [output, setOutput] = useState("");
  const [caseMode, setCaseMode] = useState("uppercase");
  const textResult = tool.kind === "case-converter" ? (caseMode === "uppercase" ? text.toUpperCase() : caseMode === "lowercase" ? text.toLowerCase() : caseMode === "title" ? text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) : text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase())) : tool.kind === "slug" ? text.toLowerCase().trim().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") : tool.kind === "dedupe" ? [...new Set(text.split(/\r?\n/).map(line=>line.trim()).filter(Boolean))].join("\n") : text;

  return <section className="section utility-page"><div className="container utility-container">
    <div className="utility-breadcrumb"><a href="/">Home</a><span>/</span><a href="/tools">All tools</a><span>/</span><span>{tool.title}</span></div>
    <div className={`utility-tool-hero accent-${tool.accent}`}>
      <div className="utility-tool-brandmark">{tool.icon === "youtube" ? <svg viewBox="0 0 48 34" aria-hidden="true"><rect x="1" y="1" width="46" height="32" rx="9" fill="currentColor"/><path d="M20 10.5v13l11-6.5z" fill="#fff"/></svg> : tool.icon === "instagram" ? <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="3" y="3" width="42" height="42" rx="13" fill="none" stroke="currentColor" strokeWidth="4"/><circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="4"/><circle cx="36" cy="12" r="2.8" fill="currentColor"/></svg> : <span>{tool.icon === "image" || tool.icon === "file-image" ? "▧" : tool.icon === "compress" ? "↔" : tool.icon === "crop" ? "⌗" : tool.icon === "text" ? "¶" : tool.icon === "type" ? "Tt" : tool.icon === "link" ? "↗" : "≡"}</span>}</div>
      <div><div className="utility-category-label">{tool.category.toUpperCase()} <span>· FREE TOOL</span></div><h1>{tool.title}</h1><p>{tool.description}</p><div className="utility-trust-row"><span>✓ No signup</span><span>✓ Simple to use</span><span>✓ Privacy-first</span></div></div>
    </div>
    <div className="utility-workspace">
      <div className="utility-panel">
        {isImage && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Choose your image</h2></div><span className="utility-mini-badge">Processed locally</span></div>
          <label className="utility-upload"><input type="file" accept="image/*" onChange={e=>onFileChange(e.target.files?.[0])}/><span className="upload-symbol">↑</span><strong>{file ? file.name : "Drop an image here or browse files"}</strong><small>JPG, PNG, WebP and other browser-supported image formats</small></label>
          {preview && <div className="utility-preview"><img src={preview} alt="Selected image preview"/><div><strong>{file?.name}</strong><span>{formatBytes(file?.size || 0)}</span><span>Image preview</span></div></div>}
          {tool.kind === "resize" && <div className="utility-fields"><label>Width (px)<input type="number" min="1" max="6000" value={width} onChange={e=>setWidth(e.target.value)}/></label><label>Height (px)<input type="number" min="1" max="6000" value={height} onChange={e=>setHeight(e.target.value)}/></label><label className="utility-check"><input type="checkbox" checked={keepRatio} onChange={e=>setKeepRatio(e.target.checked)}/> Keep aspect ratio</label></div>}
          {tool.kind === "compress" && <label className="utility-range">Image quality <strong>{quality}%</strong><input type="range" min="20" max="95" step="5" value={quality} onChange={e=>setQuality(Number(e.target.value))}/><small>Lower quality usually creates a smaller file. Results vary by image.</small></label>}
          {tool.kind === "crop" && <p className="utility-hint">This quick cropper creates a centered square crop. Choose a square image for the most predictable result.</p>}
          <button className="utility-primary" disabled={busy} onClick={processImage}>{busy ? "Processing image…" : tool.kind === "resize" ? "Resize & Download" : tool.kind === "compress" ? "Compress & Download" : tool.kind === "crop" ? "Crop Square & Download" : "Convert & Download"}<span>↗</span></button>
        </>}
        {isYoutube && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Describe your video</h2></div><span className="utility-mini-badge">Creator toolkit</span></div>
          <label className="utility-label">Video topic or working title<input value={topic} onChange={e=>{setTopic(e.target.value);setOutputVisible(false)}} placeholder="e.g. beginner photography tips"/></label>
          {tool.kind === "youtube-description" && <><label className="utility-label">Who is this video for? (optional)<input value={audience} onChange={e=>setAudience(e.target.value)} placeholder="e.g. new photographers"/></label><label className="utility-label">Writing style<select value={style} onChange={e=>setStyle(e.target.value)}><option>Helpful and informative</option><option>Friendly and casual</option><option>Professional and concise</option><option>Curious and storytelling</option></select></label></>}
          <button className="utility-primary" onClick={()=>{if(!topic.trim()){setMessage("Enter a video topic first.");return;}setOutput(generatedOutput());setOutputVisible(true);setMessage("")}}>Generate suggestions <span>✦</span></button>
          {outputVisible && <div className="utility-output"><div className="utility-output-head"><strong>Your suggestions</strong><button onClick={()=>copy(output)}>Copy results</button></div><pre>{output}</pre><small>Suggestions are generated from your input in this browser. Check relevance and accuracy before publishing.</small></div>}
        </>}
        {tool.kind === "instagram-engagement" && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Enter public metrics</h2></div><span className="utility-mini-badge">Instant calculation</span></div>
          <label className="utility-label">Follower count<input type="number" min="0" value={followers} onChange={e=>setFollowers(e.target.value)}/></label><div className="utility-fields"><label>Average likes<input type="number" min="0" value={likes} onChange={e=>setLikes(e.target.value)}/></label><label>Average comments<input type="number" min="0" value={comments} onChange={e=>setComments(e.target.value)}/></label></div>
          <div className="utility-metric-result"><span>Estimated engagement rate</span><strong>{Number.isFinite(engagement) ? engagement.toFixed(2) : "0.00"}%</strong><small>(Likes + comments) ÷ followers × 100. This is a simple estimate, not an official Instagram metric.</small></div>
        </>}
        {tool.kind === "instagram-bio" && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Paste a profile bio</h2></div><span className="utility-mini-badge">No profile scraping</span></div>
          <label className="utility-label">Bio text<textarea rows="5" maxLength="500" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste the bio text you want to review…"/></label>
          <div className="utility-metric-result"><span>Bio character count</span><strong>{text.length}/150</strong><small>{text.length > 150 ? "This is longer than the typical 150-character bio limit." : `${150-text.length} characters left before 150 characters.`}</small></div>
          <div className="utility-checklist">{[{label:"Has a clear value or identity",ok:text.trim().length>15},{label:"Includes a call to action or next step",ok:/link|dm|message|follow|shop|book|👇|⬇|http/i.test(text)},{label:"Uses line breaks for readability",ok:text.includes("\n")},{label:"Has contact or link details (if useful)",ok:/https?:|www\.|@/.test(text)}].map(x=><div key={x.label}><span className={x.ok?"check-ok":"check-pending"}>{x.ok?"✓":"○"}</span>{x.label}</div>)}</div>
        </>}
        {tool.kind === "word-counter" && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Paste or write text</h2></div><span className="utility-mini-badge">Live counts</span></div>
          <label className="utility-label">Your text<textarea rows="9" value={text} onChange={e=>setText(e.target.value)} placeholder="Start typing or paste your text here…"/></label>
          <div className="utility-stats-grid"><div><strong>{wordStats.words}</strong><span>Words</span></div><div><strong>{wordStats.chars}</strong><span>Characters</span></div><div><strong>{wordStats.noSpaces}</strong><span>No spaces</span></div><div><strong>{wordStats.sentences}</strong><span>Sentences</span></div></div><p className="utility-hint">Estimated reading time: {Math.max(1,Math.ceil(wordStats.words/200))} min at 200 words per minute.</p>
        </>}
        {tool.kind === "case-converter" && <>
          <div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>Enter your text</h2></div><span className="utility-mini-badge">Instant conversion</span></div><label className="utility-label">Text<textarea rows="7" value={text} onChange={e=>setText(e.target.value)} placeholder="Type or paste text…"/></label><label className="utility-label">Convert to<select value={caseMode} onChange={e=>setCaseMode(e.target.value)}><option value="uppercase">UPPERCASE</option><option value="lowercase">lowercase</option><option value="title">Title Case</option><option value="sentence">Sentence case</option></select></label><div className="utility-output"><div className="utility-output-head"><strong>Converted text</strong><button onClick={()=>copy(textResult)}>Copy text</button></div><pre>{textResult}</pre></div>
        </>}
        {(tool.kind === "slug" || tool.kind === "dedupe") && <><div className="utility-panel-heading"><div><span className="utility-step">01</span><h2>{tool.kind === "slug" ? "Enter a title or phrase" : "Paste your list"}</h2></div><span className="utility-mini-badge">Instant result</span></div><label className="utility-label">{tool.kind === "slug" ? "Text to convert" : "One item per line"}<textarea rows="7" value={text} onChange={e=>setText(e.target.value)} placeholder={tool.kind === "slug" ? "e.g. Best Free Online Tools" : "Paste lines here…"}/></label><div className="utility-output"><div className="utility-output-head"><strong>{tool.kind === "slug" ? "URL-friendly slug" : "Cleaned list"}</strong><button onClick={()=>copy(textResult)}>Copy result</button></div><pre>{textResult}</pre></div></>}
        {message && <div className="utility-message" role="status">{message}</div>}
      </div>
      <aside className="utility-sidebar"><div className="utility-sidebar-card"><span className="utility-sidebar-icon">✦</span><h3>Made to feel simple</h3><p>One focused task, clear controls and an easy-to-use result — without changing the POSLATOR experience.</p><div className="utility-sidebar-feature"><span>✓</span><div><strong>No account required</strong><small>Open the tool and get started.</small></div></div><div className="utility-sidebar-feature"><span>✓</span><div><strong>Privacy-conscious</strong><small>Image processing and text helpers run in your browser.</small></div></div></div><div className="utility-sidebar-card utility-related"><h3>Explore more tools</h3><a href="/tools">All online tools <span>↗</span></a><a href="/calculators">Calculators <span>↗</span></a><a href="/tools?category=Image%20Tools">Image tools <span>↗</span></a></div></aside>
    </div>
    <div className="utility-info"><div><h2>How to use {tool.title.toLowerCase()}</h2><p>{tool.description} Enter the requested information, review the result, and use the download or copy action when available. No account is required.</p></div><div><h3>Helpful to know</h3><p>{isImage ? "Image processing happens locally in your browser. Very large files may take longer and output quality depends on the original image and selected settings." : isYoutube ? "Generated titles, tags and descriptions are suggestions only. They are based on your topic and are not live keyword research or a guarantee of video performance." : "Review the result before using it. This utility is designed to assist with a specific task and does not fetch private account data."}</p></div></div>
  </div></section>;
}
