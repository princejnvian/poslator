import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import ToolSearch from "@/components/ToolSearch";

const tools = [
  ["Mortgage Calculator", "Estimate principal and interest monthly payment.", "/calculators/mortgage-calculator"],
  ["Loan Calculator", "Estimate monthly payments and total loan interest.", "/calculators/loan-calculator"],
  ["Compound Interest Calculator", "Project savings growth with compounding.", "/calculators/compound-interest-calculator"],
  ["Paycheck Calculator", "Estimate take-home pay with simple inputs.", "/calculators/paycheck-calculator"],
  ["Salary Calculator", "Convert hourly, weekly, monthly and annual pay.", "/calculators/salary-calculator"],
  ["Investment Calculator", "Project potential investment growth over time.", "/calculators/investment-calculator"],
  ["Car Loan Calculator", "Estimate a vehicle loan payment.", "/calculators/car-loan-calculator"],
  ["BMI Calculator", "Calculate adult BMI from height and weight.", "/calculators/bmi-calculator"],
  ["Take Home Pay Calculator", "Estimate net pay from gross pay and deductions.", "/calculators/take-home-pay-calculator"],
  ["Amortization Calculator", "See payment, interest and payoff schedule.", "/calculators/amortization-calculator"],
  ["Sales Tax Calculator", "Add or remove a user-supplied sales tax rate.", "/calculators/sales-tax-calculator"],
  ["Time Card Calculator", "Track clock-in/out, breaks, weekly hours and pay.", "/calculators/time-card-calculator"],
  ["Percentage Calculator", "Find percentages, changes, markup and margin.", "/calculators/percentage-calculator"],
  ["Discount Calculator", "Calculate sale prices and savings instantly.", "/calculators/discount-calculator"],
  ["Tip Calculator", "Calculate tip, total and split the bill.", "/calculators/tip-calculator"],
  ["Age Calculator", "Calculate exact age between two dates.", "/calculators/age-calculator"],
  ["Date Calculator", "Calculate days and weeks between two dates.", "/calculators/date-calculator"],
  ["Unit Converter", "Convert common length, weight and temperature units.", "/calculators/unit-converter"],
  ["Time Calculator", "Add or subtract hours and minutes.", "/calculators/time-calculator"]
];

const popular = [
  tools.find(([title]) => title === "Mortgage Calculator"),
  tools.find(([title]) => title === "Loan Calculator"),
  tools.find(([title]) => title === "Compound Interest Calculator"),
  tools.find(([title]) => title === "Paycheck Calculator"),
  tools.find(([title]) => title === "Investment Calculator"),
  tools.find(([title]) => title === "Car Loan Calculator"),
  tools.find(([title]) => title === "BMI Calculator"),
  tools.find(([title]) => title === "Salary Calculator")
];

export default function Home() {
  return (
    <>
      <section className="hero hero-premium">
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="hero-kicker"><span /> FREE TOOLS · NO SIGN-UP · PRIVACY-FIRST</div>
          <h1>Get the number.<br /><em>Make the decision.</em></h1>
          <p className="hero-copy">Fast, focused calculators for work, money, time and everyday life. No clutter. No account. Just useful answers.</p>
          <ToolSearch tools={tools} />
          <div className="hero-trust"><span>✓ Free to use</span><span>✓ Works on mobile</span><span>✓ Your inputs stay in your browser</span></div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading">
            <div><div className="eyebrow">POPULAR TOOLS</div><h2>Start with a useful answer</h2></div>
            <Link href="/calculators" className="text-link">Browse all tools <span>→</span></Link>
          </div>
          <div className="tool-grid tool-grid-premium">
            {popular.map(([title, desc, href], i) => <ToolCard key={href} title={title} description={desc} href={href} featured={i < 3} />)}
          </div>
        </div>
      </section>

      <section className="section category-section">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">BROWSE BY JOB</div><h2>Find the right tool faster</h2></div></div>
          <div className="category-grid category-grid-premium">
            <Link href="/calculators/time-card-calculator" className="category-card category-blue"><span className="category-icon">◷</span><div><b>Work & Time</b><small>Hours, time cards, overtime</small></div><strong>03 tools →</strong></Link>
            <Link href="/calculators/paycheck-calculator" className="category-card category-green"><span className="category-icon">$</span><div><b>Money & Pay</b><small>Paychecks, salary, take-home pay</small></div><strong>04 tools →</strong></Link>
            <Link href="/calculators/amortization-calculator" className="category-card category-purple"><span className="category-icon">⌂</span><div><b>Loans & Cars</b><small>Mortgage, loans and vehicle payments</small></div><strong>05 tools →</strong></Link>
            <Link href="/calculators/compound-interest-calculator" className="category-card category-orange"><span className="category-icon">↗</span><div><b>Finance & Investing</b><small>Compounding and long-term projections</small></div><strong>02 tools →</strong></Link>
            <Link href="/calculators/percentage-calculator" className="category-card category-blue"><span className="category-icon">%</span><div><b>Everyday Math</b><small>Percentages, tips, discounts and tax</small></div><strong>04 tools →</strong></Link>
            <Link href="/calculators/age-calculator" className="category-card category-green"><span className="category-icon">◫</span><div><b>Dates & Health</b><small>Age, dates and BMI basics</small></div><strong>03 tools →</strong></Link>
          </div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="container workflow-grid">
          <div><div className="eyebrow">DESIGNED FOR REAL LIFE</div><h2>One clean workflow.<br />From question to answer.</h2><p>POSLATOR keeps the useful parts front and center. Enter your numbers, see the result, understand the calculation, then move on.</p><Link href="/calculators" className="btn btn-primary">Explore all calculators ↗</Link></div>
          <div className="workflow-card"><div className="workflow-step"><span>01</span><div><b>Choose a tool</b><small>Search by the problem you are solving.</small></div></div><div className="workflow-step"><span>02</span><div><b>Enter your numbers</b><small>Simple fields with clear units and labels.</small></div></div><div className="workflow-step"><span>03</span><div><b>Get an instant result</b><small>Useful breakdowns without unnecessary steps.</small></div></div><div className="workflow-step"><span>04</span><div><b>Keep moving</b><small>Jump to a related calculator when you need it.</small></div></div></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <div className="section-heading"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Why POSLATOR?</h2></div></div>
          <div className="faq-grid"><div><b>Fast by design</b><p>Calculator logic runs directly in the browser, so results appear immediately.</p></div><div><b>No account wall</b><p>Open a calculator and use it. No login is required for the core tools.</p></div><div><b>Clear, not crowded</b><p>Every screen is built around one task instead of a pile of distractions.</p></div><div><b>Built to grow</b><p>We can expand from calculators into converters and practical utilities without changing the core experience.</p></div></div>
        </div>
      </section>
    </>
  );
}
