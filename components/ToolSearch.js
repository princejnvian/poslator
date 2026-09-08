"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function ToolSearch({ tools }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return tools.filter(([title, desc]) => `${title} ${desc}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query, tools]);

  return (
    <div className="search-box-wrap">
      <div className="search-box">
        <span className="search-symbol">⌕</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search calculators, money, time, loans..." aria-label="Search tools" />
        <kbd>⌘ K</kbd>
      </div>
      {query && (
        <div className="search-results">
          {results.length ? results.map(([title, desc, href]) => (
            <Link key={href} href={href} onClick={() => setQuery("")} className="search-result">
              <span className="result-dot">+</span>
              <span><strong>{title}</strong><small>{desc}</small></span>
              <span>→</span>
            </Link>
          )) : <div className="empty-search">No tool found. Try “paycheck”, “time”, “loan” or “tip”.</div>}
        </div>
      )}
    </div>
  );
}
