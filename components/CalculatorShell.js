export default function CalculatorShell({ title, description, children, note }) {
  return (
    <div className="calc-shell">
      <div className="calc-head">
        <div>
          <div className="eyebrow">FREE CALCULATOR</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="calc-body">{children}</div>
      {note && <div className="calc-note">{note}</div>}
    </div>
  );
}
