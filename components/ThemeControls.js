"use client";
import { useEffect, useState } from "react";

const modes = [
  ["light", "☀️", "Light"],
  ["dark", "🌙", "Dark"],
  ["comfort", "👁️", "Eye Comfort"],
];

export default function ThemeControls() {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("poslator-theme") || "light";
    setMode(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  function choose(next) {
    setMode(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("poslator-theme", next);
    setOpen(false);
  }

  const current = modes.find((m) => m[0] === mode) || modes[0];

  return (
    <div className="theme-control">
      <button className="theme-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Change display mode">
        <span>{current[1]}</span><b>{current[2]}</b><i>⌄</i>
      </button>
      {open && (
        <div className="theme-menu">
          {modes.map(([value, icon, label]) => (
            <button key={value} type="button" className={mode === value ? "selected" : ""} onClick={() => choose(value)}>
              <span>{icon}</span><b>{label}</b>{mode === value && <em>✓</em>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
