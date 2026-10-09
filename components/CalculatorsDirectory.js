"use client";

import { useMemo, useState } from "react";
import ToolCard from "@/components/ToolCard";
import calculatorTools from "@/components/calculatorTools";

const tools = calculatorTools;

const categories = ["All", ...Array.from(new Set(tools.map((t) => t[3])))];

export default function Calculators() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => tools.filter(([title, desc, , cat]) => {
    const matchesQuery = `${title} ${desc}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (category === "All" || category === cat);
  }), [query, category]);

  return (
    <section className="section directory-page">
      <div className="container">
        <div className="directory-hero">
          <div><div className="eyebrow">THE POSLATOR TOOLKIT</div><h1>All calculators, one clean place.</h1><p>Find the right calculator by name or browse by the job you are trying to finish.</p></div>
          <div className="directory-count"><strong>{tools.length}</strong><span>tools ready to use</span></div>
        </div>
        <div className="directory-controls"><div className="directory-search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tools..." /></div><div className="filter-row">{categories.map((cat) => <button key={cat} className={category === cat ? "active" : ""} onClick={() => setCategory(cat)}>{cat}</button>)}</div></div>
        <div className="directory-meta"><span>{filtered.length} {filtered.length === 1 ? "tool" : "tools"} found</span><span>Runs locally in your browser</span></div>
        <div className="tool-grid">{filtered.map(([title, desc, href]) => <ToolCard key={href} title={title} description={desc} href={href} />)}</div>
        {!filtered.length && <div className="no-results"><strong>No matching tool.</strong><span>Try a broader search such as “pay”, “time”, “loan” or “money”.</span></div>}
      </div>
    </section>
  );
}
