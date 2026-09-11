"use client";
import { useEffect, useRef, useState } from "react";

function getResultText(root) {
  return Array.from(root?.querySelectorAll(".result") || [])
    .map((el) => {
      const label = el.querySelector("span")?.textContent?.trim();
      const value = el.querySelector("strong")?.textContent?.trim();
      return label && value ? `${label}: ${value}` : null;
    })
    .filter(Boolean)
    .join("\n");
}

export default function CalculatorShell({ title, description, children, note }) {
  const [focus, setFocus] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!focus) return;
    const onKey = (e) => e.key === "Escape" && setFocus(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("calculator-focus-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("calculator-focus-open");
    };
  }, [focus]);

  function clearAll() {
    window.dispatchEvent(new Event("poslator:clear-all"));
  }

  async function copyResult() {
    const text = getResultText(rootRef.current);
    if (!text) return;
    try {
      await navigator.clipboard.writeText(`${title}\n${text}`);
      window.dispatchEvent(new CustomEvent("poslator:toast", { detail: "Result copied" }));
    } catch {}
  }

  async function shareResult() {
    const text = getResultText(rootRef.current);
    if (!text) return;
    const shareData = { title: `${title} | POSLATOR`, text: `${title}\n${text}`, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else await navigator.clipboard.writeText(`${title}\n${text}\n${window.location.href}`);
    } catch {}
  }

  return (
    <div className={focus ? "calculator-focus-backdrop" : ""}>
      <div ref={rootRef} className={focus ? "calc-shell calc-shell-focus" : "calc-shell"}>
        <div className="calc-head">
          <div className="calc-title-wrap">
            <div className="eyebrow">FREE CALCULATOR</div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="calc-actions" aria-label="Calculator actions">
            <button type="button" className="calc-action" onClick={clearAll} title="Clear all inputs">↺ <span>Clear All</span></button>
            <button type="button" className="calc-action" onClick={copyResult} title="Copy result">▣ <span>Copy</span></button>
            <button type="button" className="calc-action" onClick={shareResult} title="Share result">↗ <span>Share</span></button>
            <button type="button" className="calc-action calc-focus-action" onClick={() => setFocus((v) => !v)} title={focus ? "Exit focus mode" : "Open focus mode"}>{focus ? "×" : "⛶"} <span>{focus ? "Exit" : "Focus"}</span></button>
          </div>
        </div>
        <div className="calc-body">{children}</div>
        {note && <div className="calc-note">{note}</div>}
      </div>
    </div>
  );
}
