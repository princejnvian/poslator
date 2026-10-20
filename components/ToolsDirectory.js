"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { utilityTools } from "@/components/utilityTools";

function BrandIcon({ tool }) {
  if (tool.icon === "youtube") return <span className="brand-logo brand-youtube"><svg viewBox="0 0 48 34" aria-hidden="true"><rect x="1" y="1" width="46" height="32" rx="9"/><path d="M20 10.5v13l11-6.5z"/></svg></span>;
  if (tool.icon === "instagram") return <span className="brand-logo brand-instagram"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="4" width="40" height="40" rx="12"/><circle cx="24" cy="24" r="9.5"/><circle cx="36" cy="12" r="2.5"/></svg></span>;
  return <span className={`brand-logo brand-${tool.accent}`}>{tool.icon === "image" || tool.icon === "file-image" ? "▧" : tool.icon === "compress" ? "↔" : tool.icon === "crop" ? "⌗" : tool.icon === "text" ? "¶" : tool.icon === "type" ? "Tt" : tool.icon === "link" ? "↗" : tool.icon === "resume" ? "CV" : "≡"}</span>;
}
export default function ToolsDirectory() {
  const [query,setQuery] = useState(""); const [category,setCategory] = useState("All tools");
  const categories = ["All tools", ...new Set(utilityTools.map(t=>t.category))];
  const filtered = useMemo(()=>utilityTools.filter(t=>(category==="All tools"||t.category===category)&&`${t.title} ${t.description} ${t.category}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
  return <section className="section utility-directory"><div className="container">
    <div className="tools-directory-hero"><div><div className="eyebrow">THE POSLATOR TOOLKIT</div><h1>Small tools. <em>Big time-savers.</em></h1><p>Handy image, creator and text utilities — with the same clean POSLATOR look and no account wall.</p><div className="utility-trust-row"><span>✓ Free to use</span><span>✓ No signup</span><span>✓ Built for quick tasks</span></div></div><div className="directory-hero-art"><div className="floating-tool floating-youtube"><svg viewBox="0 0 48 34"><rect x="1" y="1" width="46" height="32" rx="9"/><path d="M20 10.5v13l11-6.5z"/></svg></div><div className="floating-tool floating-instagram"><svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="12"/><circle cx="24" cy="24" r="9.5"/><circle cx="36" cy="12" r="2.5"/></svg></div><div className="floating-tool floating-image">▧</div><div className="floating-tool floating-type">Tt</div><div className="art-caption">One toolkit. More ways to get things done.</div></div></div>
    <div className="tools-directory-controls"><label className="tools-search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search image, YouTube, Instagram or text tools…"/></label><div className="tools-filter-row">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div></div>
    <div className="tools-directory-meta"><strong>{filtered.length} tools</strong><span>Pick a category or search by task</span></div>
    {categories.slice(1).filter(c=>category==="All tools"||category===c).map(cat=><section className="utility-category-section" key={cat}><div className="utility-section-heading"><div><span>{cat.toUpperCase()}</span><h2>{cat}</h2></div><small>{filtered.filter(t=>t.category===cat).length} available</small></div><div className="utility-card-grid">{filtered.filter(t=>t.category===cat).map(tool=><Link href={`/tools/${tool.slug}`} className={`utility-directory-card accent-${tool.accent}`} key={tool.slug}><div className="utility-card-top"><BrandIcon tool={tool}/><span className="utility-card-arrow">↗</span></div><h3>{tool.title}</h3><p>{tool.description}</p><div className="utility-card-bottom"><span>OPEN TOOL</span><strong>Try it →</strong></div></Link>)}</div>{!filtered.some(t=>t.category===cat)&&<p className="tools-empty-category">No tools match this search in {cat.toLowerCase()}.</p>}</section>)}
    {!filtered.length&&<div className="no-results"><strong>No matching tool.</strong><span>Try a shorter keyword or choose All tools.</span></div>}
    <div className="utility-back-to-calculators"><div><strong>Looking for a calculator instead?</strong><span>Browse the original POSLATOR calculator collection.</span></div><Link href="/calculators">Explore calculators ↗</Link></div>
  </div></section>;
}
