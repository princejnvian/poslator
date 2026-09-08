import Link from "next/link";

const icons = {
  "Time Card Calculator": "◷", "Hours Worked Calculator": "⌛", "Overtime Calculator": "＋",
  "Paycheck Calculator": "$", "Take Home Pay Calculator": "↓", "Salary Calculator": "↗",
  "Percentage Calculator": "%", "Discount Calculator": "%", "Tip Calculator": "＋",
  "Sales Tax Calculator": "$", "Amortization Calculator": "▤", "Car Affordability Calculator": "◇",
  "Age Calculator": "◎", "Unit Converter": "⇄", "Time Calculator": "◴", "Mortgage Calculator": "⌂"
};

export default function ToolCard({ title, description, href, featured = false }) {
  return (
    <Link href={href} className={`tool-card ${featured ? "tool-card-featured" : ""}`}>
      <div className="tool-icon">{icons[title] || "+"}</div>
      <div className="tool-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="arrow">↗</span>
    </Link>
  );
}
