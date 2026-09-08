import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">P</span><span>POSLATOR</span></Link><p>Free, focused calculators for everyday decisions. Built to be fast, clear and easy to use.</p></div><div><b>Popular tools</b><Link href="/calculators/paycheck-calculator">Paycheck Calculator</Link><Link href="/calculators/time-card-calculator">Time Card Calculator</Link><Link href="/calculators/mortgage-calculator">Mortgage Calculator</Link><Link href="/calculators/tip-calculator">Tip Calculator</Link></div><div><b>Company</b><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link></div></div>
      <div className="container footer-bottom"><span>© 2026 POSLATOR. All rights reserved.</span><span>Made for useful answers.</span></div>
    </footer>
  );
}
