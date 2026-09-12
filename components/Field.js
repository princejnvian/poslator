"use client";
import React from "react";

export function Field({ label, value, onChange, type = "number", min, max, step = "any", placeholder, suffix, options }) {
  React.useEffect(() => {
    const clear = () => onChange("");
    window.addEventListener("poslator:clear-all", clear);
    return () => window.removeEventListener("poslator:clear-all", clear);
  }, [onChange]);

  const inputMode = type === "number" ? "decimal" : undefined;

  return (
    <label className="field">
      <span>{label}</span>
      {options ? (
        <select value={value} onChange={e => onChange(e.target.value)}>
          {options.map(o => <option key={o[0]} value={o[0]}>{o[1]}</option>)}
        </select>
      ) : (
        <div className="input-wrap">
          <input type={type} inputMode={inputMode} enterKeyHint="next" value={value} onChange={e => onChange(e.target.value)} min={min} max={max} step={step} placeholder={placeholder}/>
          {suffix && <em>{suffix}</em>}
        </div>
      )}
    </label>
  );
}

export function Result({ label, value, large = false }) {
  return <div className={large ? "result result-large" : "result"}><span>{label}</span><strong>{value}</strong></div>;
}

export function Results({ children }) {
  return <div className="results">{children}</div>;
}
