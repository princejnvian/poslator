import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container nav">
          <Link href="/" className="brand" aria-label="Poslator home">
            <span className="brand-mark">P</span><span>POSLATOR</span>
          </Link>
          <nav className="main-nav">
            <Link href="/calculators">Calculators</Link>
            <Link href="/calculators">All Tools</Link>
            <Link href="/about">About</Link>
          </nav>
          <Link href="/calculators" className="nav-cta">Open a tool <span>↗</span></Link>
        </div>
      </div>
      <div className="subnav">
        <div className="container subnav-inner">
          <Link href="/calculators/time-card-calculator">Work & Time</Link>
          <Link href="/calculators/paycheck-calculator">Money & Pay</Link>
          <Link href="/calculators/tip-calculator">Everyday Money</Link>
          <Link href="/calculators/amortization-calculator">Loans</Link>
          <Link href="/calculators/unit-converter">Converters</Link>
          <span className="subnav-spacer" />
          <span className="privacy-pill">● Runs in your browser</span>
        </div>
      </div>
    </header>
  );
}
