"use client";
import { useEffect, useRef, useState } from "react";

const HISTORY_KEY = "poslator-calculation-history";
const MAX_HISTORY = 60;
const MAX_VISIBLE_HISTORY = 12;

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

function getInputSnapshot(root) {
  if (!root) return [];
  const fields = Array.from(root.querySelectorAll(".field"))
    .map((field) => {
      const label = field.querySelector(":scope > span")?.textContent?.trim();
      const control = field.querySelector("input, select");
      if (!label || !control) return null;
      const value = control.tagName === "SELECT"
        ? control.options[control.selectedIndex]?.textContent?.trim() || ""
        : control.value || "";
      return { label, value };
    })
    .filter((item) => item && item.value !== "");



  return fields;
}

function getPrintSnapshot(root) {
  return {
    inputs: getInputSnapshot(root),
    results: Array.from(root?.querySelectorAll(".result") || [])
      .map((el) => ({
        label: el.querySelector("span")?.textContent?.trim(),
        value: el.querySelector("strong")?.textContent?.trim(),
        large: el.classList.contains("result-large"),
      }))
      .filter((item) => item.label && item.value),
    note: root?.querySelector(".calc-note")?.textContent?.trim() || "",
    table: root?.querySelector(".time-table") ? Array.from(root.querySelectorAll(".time-table tbody tr")).map((tr) => Array.from(tr.children).map((cell) => cell.querySelector("input")?.value ?? cell.textContent?.trim() ?? "")) : [],
    tableHeaders: root?.querySelector(".time-table") ? Array.from(root.querySelectorAll(".time-table thead th")).map((th) => th.textContent?.trim() || "") : [],
  };
}

function readHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function CalculatorShell({ title, description, children, note }) {
  const [focus, setFocus] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [printSnapshot, setPrintSnapshot] = useState({ inputs: [], results: [], note: "", table: [], tableHeaders: [] });
  const [printDate, setPrintDate] = useState("");
  const rootRef = useRef(null);
  const dirtyRef = useRef(false);
  const saveTimerRef = useRef(null);

  function refreshPrintSnapshot() {
    setPrintSnapshot(getPrintSnapshot(rootRef.current));
  }

  useEffect(() => {
    setHistory(readHistory().filter((item) => item.title === title).slice(0, MAX_VISIBLE_HISTORY));
    refreshPrintSnapshot();
    setPrintDate(new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));

    const root = rootRef.current;
    if (!root) return;

    const scheduleSave = () => {
      dirtyRef.current = true;
      window.clearTimeout(saveTimerRef.current);
      saveTimerRef.current = window.setTimeout(() => {
        const results = getResultText(root);
        if (!results) return;
        const inputs = getInputSnapshot(root);
        if (!inputs.length) return;
        const signature = JSON.stringify({ title, inputs, results });
        const all = readHistory();
        if (all[0]?.signature === signature) return;
        const entry = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title, inputs, results, signature, timestamp: new Date().toISOString() };
        const next = [entry, ...all.filter((item) => item.signature !== signature)].slice(0, MAX_HISTORY);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
        setHistory(next.filter((item) => item.title === title).slice(0, MAX_VISIBLE_HISTORY));
      }, 850);
    };

    const refresh = () => {
      window.setTimeout(refreshPrintSnapshot, 0);
      scheduleSave();
    };
    const clear = () => {
      dirtyRef.current = false;
      window.clearTimeout(saveTimerRef.current);
      window.setTimeout(refreshPrintSnapshot, 0);
    };

    root.addEventListener("input", refresh, true);
    root.addEventListener("change", refresh, true);
    window.addEventListener("poslator:clear-all", clear);
    return () => {
      root.removeEventListener("input", refresh, true);
      root.removeEventListener("change", refresh, true);
      window.removeEventListener("poslator:clear-all", clear);
      window.clearTimeout(saveTimerRef.current);
    };
  }, [title]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onKeyDown = (e) => {
      if (e.key !== "Enter") return;
      const target = e.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
      if (target.type === "submit" || target.type === "button") return;
      const controls = Array.from(root.querySelectorAll("input, select, textarea, button"))
        .filter((el) => !el.disabled && el.getAttribute("tabindex") !== "-1" && el.offsetParent !== null);
      const index = controls.indexOf(target);
      if (index < 0) return;
      const next = controls[index + 1];
      if (next) {
        e.preventDefault();
        next.focus();
      }
    };
    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, []);

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

  async function copyFullReport() {
    const snapshot = getPrintSnapshot(rootRef.current);
    if (!snapshot.results.length) return;
    const inputs = snapshot.inputs.map((item) => `${item.label}: ${item.value}`).join("\n");
    const table = snapshot.table.length
      ? `\n\n${snapshot.tableHeaders.join(" | ")}\n${snapshot.table.map((row) => row.join(" | ")).join("\n")}`
      : "";
    const results = snapshot.results.map((item) => `${item.label}: ${item.value}`).join("\n");
    const text = `${title}\n\n${inputs ? `${inputs}\n` : ""}${table}${results ? `\n\n${results}` : ""}${snapshot.note ? `\n\nNote: ${snapshot.note}` : ""}`;
    try {
      await navigator.clipboard.writeText(text);
      window.dispatchEvent(new CustomEvent("poslator:toast", { detail: "Full report copied" }));
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

  function printReport() {
    refreshPrintSnapshot();
    window.setTimeout(() => window.print(), 60);
  }

  function clearHistory() {
    const remaining = readHistory().filter((item) => item.title !== title);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(remaining));
    setHistory([]);
  }

  return (
    <>
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
            <button type="button" className="calc-action" onClick={copyFullReport} title="Copy full calculation report">▤ <span>Full Report</span></button>
            <button type="button" className="calc-action" onClick={shareResult} title="Share result">↗ <span>Share</span></button>
            <button type="button" className="calc-action" onClick={printReport} title="Print or save as PDF">🖨 <span>Print</span></button>
            <button type="button" className="calc-action" onClick={() => setHistoryOpen((v) => !v)} title="View saved calculations">◷ <span>History</span></button>
            <button type="button" className="calc-action calc-focus-action" onClick={() => setFocus((v) => !v)} title={focus ? "Exit focus mode" : "Open focus mode"}>{focus ? "×" : "⛶"} <span>{focus ? "Exit" : "Focus"}</span></button>
          </div>
        </div>

        {historyOpen && (
          <div className="calc-history" aria-label="Calculation history">
            <div className="calc-history-head">
              <div><strong>Recent calculations</strong><span>Saved only on this device.</span></div>
              {history.length > 0 && <button type="button" onClick={clearHistory}>Clear history</button>}
            </div>
            {history.length ? history.map((item) => (
              <div className="calc-history-item" key={item.id}>
                <div><strong>{new Date(item.timestamp).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}</strong><span>{item.inputs.slice(0, 3).map((input) => `${input.label}: ${input.value}`).join(" · ")}</span></div>
                <b>{item.results.split("\n")[0]}</b>
              </div>
            )) : <div className="calc-history-empty">No saved calculations yet. Your completed calculations will appear here automatically.</div>}
          </div>
        )}

        <div className="calc-body">{children}</div>
        {note && <div className="calc-note">{note}</div>}

        </div>
      </div>

      <div className="print-report" aria-hidden="true">
        <div className="print-brand">POSLATOR</div>
        <h1>{title}</h1>
        <p className="print-description">Calculation report</p>
        {printSnapshot.inputs.length > 0 && <section><h2>Inputs</h2><div className="print-inputs">{printSnapshot.inputs.map((item, index) => <div key={`${item.label}-${index}`}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></section>}
        {printSnapshot.table.length > 0 && <section><h2>Time entries</h2><table className="print-table"><thead><tr>{printSnapshot.tableHeaders.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{printSnapshot.table.map((row, index) => <tr key={index}>{row.map((value, cell) => <td key={cell}>{value}</td>)}</tr>)}</tbody></table></section>}
        {printSnapshot.results.length > 0 && <section><h2>Results</h2><div className="print-results">{printSnapshot.results.map((item, index) => <div className={item.large ? "print-result print-result-large" : "print-result"} key={`${item.label}-${index}`}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></section>}
        {printSnapshot.note && <p className="print-note">{printSnapshot.note}</p>}
        <footer>Generated with POSLATOR · poslator.com{printDate ? ` · ${printDate}` : ""}</footer>
      </div>
    </>
  );
}
