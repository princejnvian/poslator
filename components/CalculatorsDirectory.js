"use client";

import { useMemo, useState } from "react";
import ToolCard from "@/components/ToolCard";

const tools = [
  ["Time Card Calculator", "Track clock-in/out, breaks, weekly hours and pay.", "/calculators/time-card-calculator", "Work & Time"],
  ["Hours Worked Calculator", "Calculate hours and decimal hours between times.", "/calculators/hours-worked-calculator", "Work & Time"],
  ["Overtime Calculator", "Estimate regular, overtime and total gross pay.", "/calculators/overtime-calculator", "Work & Time"],
  ["Paycheck Calculator", "Simple paycheck planning estimate.", "/calculators/paycheck-calculator", "Money & Pay"],
  ["Take Home Pay Calculator", "Estimate net pay from gross pay and deductions.", "/calculators/take-home-pay-calculator", "Money & Pay"],
  ["Salary Calculator", "Convert hourly, weekly, monthly and annual pay.", "/calculators/salary-calculator", "Money & Pay"],
  ["Sales Tax Calculator", "Add or remove a user-supplied sales tax rate.", "/calculators/sales-tax-calculator", "Money & Pay"],
  ["Percentage Calculator", "Find percentages, percentage change and reverse percentages.", "/calculators/percentage-calculator", "Everyday Math"],
  ["Discount Calculator", "Calculate sale prices and savings.", "/calculators/discount-calculator", "Everyday Math"],
  ["Tip Calculator", "Calculate tip, total and split the bill.", "/calculators/tip-calculator", "Everyday Math"],
  ["Amortization Calculator", "See monthly payment, interest and payoff schedule.", "/calculators/amortization-calculator", "Loans & Cars"],
  ["Mortgage Calculator", "Estimate principal and interest monthly payment.", "/calculators/mortgage-calculator", "Loans & Cars"],
  ["Car Affordability Calculator", "Estimate a comfortable car price from income and debt.", "/calculators/car-affordability-calculator", "Loans & Cars"],
  ["Loan Calculator", "Estimate monthly payments and total loan interest.", "/calculators/loan-calculator", "Loans & Cars"],
  ["Car Loan Calculator", "Estimate a vehicle loan payment and interest.", "/calculators/car-loan-calculator", "Loans & Cars"],
  ["Compound Interest Calculator", "Project savings growth with compounding and contributions.", "/calculators/compound-interest-calculator", "Finance & Investing"],
  ["Investment Calculator", "Project potential investment growth over time.", "/calculators/investment-calculator", "Finance & Investing"],
  ["Age Calculator", "Calculate exact age between two dates.", "/calculators/age-calculator", "Dates & Time"],
  ["Date Calculator", "Calculate days and weeks between two dates.", "/calculators/date-calculator", "Dates & Time"],
  ["Unit Converter", "Convert common length, weight and temperature units.", "/calculators/unit-converter", "Converters"],
  ["Time Calculator", "Add or subtract hours and minutes.", "/calculators/time-calculator", "Dates & Time"],
  ["BMI Calculator", "Calculate adult BMI from height and weight.", "/calculators/bmi-calculator", "Health & Fitness"],
  ["Mortgage Payoff Calculator", "Estimate payoff time and interest with extra payments.", "/calculators/mortgage-payoff-calculator", "Loans & Cars"],
  ["Retirement Calculator", "Project potential retirement savings over time.", "/calculators/retirement-calculator", "Finance & Investing"],
  ["Savings Calculator", "Estimate savings growth from deposits and interest.", "/calculators/savings-calculator", "Finance & Investing"],
  ["Debt Payoff Calculator", "Estimate time and interest to pay off debt.", "/calculators/debt-payoff-calculator", "Finance & Investing"],
  ["401(k) Calculator", "Project 401(k) growth with contributions and employer match.", "/calculators/401k-calculator", "Finance & Investing"],
  ["Roth IRA Calculator", "Project potential Roth IRA growth.", "/calculators/roth-ira-calculator", "Finance & Investing"],
  ["APY Calculator", "Calculate annual percentage yield with compounding.", "/calculators/apy-calculator", "Finance & Investing"],
  ["APR Calculator", "Estimate APR including upfront loan fees.", "/calculators/apr-calculator", "Loans & Cars"],
  ["Interest Rate Calculator", "Find a simple annual interest rate.", "/calculators/interest-rate-calculator", "Finance & Investing"],
  ["Debt-to-Income Ratio Calculator", "Calculate monthly debt-to-income ratio.", "/calculators/debt-to-income-ratio-calculator", "Finance & Investing"],
  ["Emergency Fund Calculator", "Estimate a target emergency savings fund.", "/calculators/emergency-fund-calculator", "Finance & Investing"],
  ["Net Worth Calculator", "Compare your assets and liabilities.", "/calculators/net-worth-calculator", "Finance & Investing"],
  ["Hourly to Salary Calculator", "Convert hourly pay to annual and monthly salary.", "/calculators/hourly-to-salary-calculator", "Money & Pay"],
  ["Salary to Hourly Calculator", "Convert annual salary to an hourly rate.", "/calculators/salary-to-hourly-calculator", "Money & Pay"],
  ["Commission Calculator", "Calculate commission from sales and rate.", "/calculators/commission-calculator", "Money & Pay"],
  ["Bonus Calculator", "Estimate a gross bonus from salary and percentage.", "/calculators/bonus-calculator", "Money & Pay"],
  ["PTO Calculator", "Estimate remaining paid time off.", "/calculators/pto-calculator", "Work & Time"],
  ["Time Zone Converter", "Convert clock times between common UTC offsets.", "/calculators/time-zone-converter", "Dates & Time"],
  ["Fraction Calculator", "Calculate and simplify fractions.", "/calculators/fraction-calculator", "Everyday Math"],
  ["Ratio Calculator", "Simplify ratios and solve proportions.", "/calculators/ratio-calculator", "Everyday Math"],
  ["Average Calculator", "Find the mean of a list of numbers.", "/calculators/average-calculator", "Everyday Math"],
  ["Random Number Generator", "Generate random integers in a range.", "/calculators/random-number-generator", "Everyday Math"],
  ["GCF Calculator", "Find the greatest common factor.", "/calculators/gcf-calculator", "Everyday Math"],
  ["LCM Calculator", "Find the least common multiple.", "/calculators/lcm-calculator", "Everyday Math"],
  ["Scientific Calculator", "Evaluate common arithmetic expressions.", "/calculators/scientific-calculator", "Everyday Math"],
  ["Days Between Dates Calculator", "Count calendar days including both dates.", "/calculators/days-between-dates-calculator", "Dates & Time"],
  ["GPA Calculator", "Calculate a simple grade point average.", "/calculators/gpa-calculator", "Education"],
  ["Grade Calculator", "Calculate percentage and letter-grade estimate.", "/calculators/grade-calculator", "Education"]
];

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
