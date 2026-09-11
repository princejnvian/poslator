"use client";

import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

const money = (n) => `$${(Number.isFinite(n) ? n : 0).toFixed(2)}`;

function payment(principal, annualRate, months) {
  const p = Math.max(0, principal);
  const n = Math.max(0, months);
  const r = annualRate / 100 / 12;
  if (!p || !n) return 0;
  if (r === 0) return p / n;
  return p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}

export function LoanCalculator() {
  const [amount, setAmount] = useState("25000");
  const [rate, setRate] = useState("7");
  const [term, setTerm] = useState("60");
  const p = Number(amount) || 0, r = Number(rate) || 0, n = Number(term) || 0;
  const monthly = payment(p, r, n);
  const total = monthly * n;
  return <CalculatorShell title="Loan Calculator" description="Estimate monthly payments, total payments and total interest for a fixed-rate loan.">
    <div className="form-grid">
      <Field label="Loan amount" value={amount} onChange={setAmount} suffix="$" />
      <Field label="Interest rate" value={rate} onChange={setRate} suffix="%" />
      <Field label="Loan term" value={term} onChange={setTerm} suffix="months" />
    </div>
    <Results>
      <Result label="Monthly payment" value={money(monthly)} large />
      <Result label="Total payments" value={money(total)} />
      <Result label="Total interest" value={money(Math.max(0, total - p))} />
    </Results>
    <div className="calc-note">Estimate only. Actual loan offers may include fees, variable rates, taxes, insurance or other costs.</div>
  </CalculatorShell>;
}

export function CarLoanCalculator() {
  const [price, setPrice] = useState("30000");
  const [down, setDown] = useState("5000");
  const [trade, setTrade] = useState("0");
  const [rate, setRate] = useState("7");
  const [term, setTerm] = useState("60");
  const principal = Math.max(0, (Number(price) || 0) - (Number(down) || 0) - (Number(trade) || 0));
  const monthly = payment(principal, Number(rate) || 0, Number(term) || 0);
  const total = monthly * (Number(term) || 0);
  return <CalculatorShell title="Car Loan Calculator" description="Estimate a monthly car payment from vehicle price, down payment, trade-in value, interest rate and loan term.">
    <div className="form-grid">
      <Field label="Vehicle price" value={price} onChange={setPrice} suffix="$" />
      <Field label="Down payment" value={down} onChange={setDown} suffix="$" />
      <Field label="Trade-in value" value={trade} onChange={setTrade} suffix="$" />
      <Field label="Interest rate" value={rate} onChange={setRate} suffix="%" />
      <Field label="Loan term" value={term} onChange={setTerm} suffix="months" />
    </div>
    <Results>
      <Result label="Amount financed" value={money(principal)} />
      <Result label="Estimated monthly payment" value={money(monthly)} large />
      <Result label="Total interest" value={money(Math.max(0, total - principal))} />
    </Results>
    <div className="calc-note">Taxes, registration, dealer fees, add-ons and insurance are not included unless reflected in the vehicle price or financing amount.</div>
  </CalculatorShell>;
}

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [monthly, setMonthly] = useState("300");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");
  const [frequency, setFrequency] = useState("12");
  const p = Math.max(0, Number(principal) || 0);
  const c = Math.max(0, Number(monthly) || 0);
  const r = (Number(rate) || 0) / 100;
  const t = Math.max(0, Number(years) || 0);
  const n = Math.max(1, Number(frequency) || 12);
  const periods = t * n;
  const periodicRate = r / n;
  const growth = periodicRate === 0 ? p + c * periods : p * Math.pow(1 + periodicRate, periods) + c * ((Math.pow(1 + periodicRate, periods) - 1) / periodicRate);
  const contributions = p + c * periods;
  return <CalculatorShell title="Compound Interest Calculator" description="Estimate how savings can grow with compound interest and regular monthly contributions.">
    <div className="form-grid">
      <Field label="Starting balance" value={principal} onChange={setPrincipal} suffix="$" />
      <Field label="Monthly contribution" value={monthly} onChange={setMonthly} suffix="$" />
      <Field label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
      <Field label="Time" value={years} onChange={setYears} suffix="years" />
      <Field label="Compounding" value={frequency} onChange={setFrequency} options={[["1","Annually"],["4","Quarterly"],["12","Monthly"],["365","Daily"]]} />
    </div>
    <Results>
      <Result label="Future value" value={money(growth)} large />
      <Result label="Total contributions" value={money(contributions)} />
      <Result label="Interest earned" value={money(Math.max(0, growth - contributions))} />
    </Results>
    <div className="calc-note">This is a mathematical projection. Real investment returns can vary, and taxes, fees and market losses are not included.</div>
  </CalculatorShell>;
}

export function InvestmentCalculator() {
  const [initial, setInitial] = useState("10000");
  const [monthly, setMonthly] = useState("500");
  const [returnRate, setReturnRate] = useState("8");
  const [years, setYears] = useState("20");
  const p = Math.max(0, Number(initial) || 0);
  const c = Math.max(0, Number(monthly) || 0);
  const r = (Number(returnRate) || 0) / 100 / 12;
  const n = Math.max(0, (Number(years) || 0) * 12);
  const future = r === 0 ? p + c * n : p * Math.pow(1 + r, n) + c * ((Math.pow(1 + r, n) - 1) / r);
  const invested = p + c * n;
  return <CalculatorShell title="Investment Calculator" description="Project a potential investment balance using an initial amount, monthly contributions, expected return and time horizon.">
    <div className="form-grid">
      <Field label="Initial investment" value={initial} onChange={setInitial} suffix="$" />
      <Field label="Monthly contribution" value={monthly} onChange={setMonthly} suffix="$" />
      <Field label="Expected annual return" value={returnRate} onChange={setReturnRate} suffix="%" />
      <Field label="Time horizon" value={years} onChange={setYears} suffix="years" />
    </div>
    <Results>
      <Result label="Projected value" value={money(future)} large />
      <Result label="Total invested" value={money(invested)} />
      <Result label="Projected growth" value={money(Math.max(0, future - invested))} />
    </Results>
    <div className="calc-note">Projection only, not a guarantee of investment performance. Actual returns may be higher or lower and can be negative.</div>
  </CalculatorShell>;
}

export function BMICalculator() {
  const [height, setHeight] = useState("5");
  const [inches, setInches] = useState("10");
  const [weight, setWeight] = useState("180");
  const totalInches = Math.max(0, (Number(height) || 0) * 12 + (Number(inches) || 0));
  const bmi = totalInches > 0 ? (Number(weight) || 0) * 703 / (totalInches * totalInches) : 0;
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy weight" : bmi < 30 ? "Overweight" : "Obesity";
  return <CalculatorShell title="BMI Calculator" description="Calculate body mass index from height and weight using the standard adult BMI formula.">
    <div className="form-grid">
      <Field label="Height — feet" value={height} onChange={setHeight} suffix="ft" />
      <Field label="Height — inches" value={inches} onChange={setInches} suffix="in" />
      <Field label="Weight" value={weight} onChange={setWeight} suffix="lb" />
    </div>
    <Results>
      <Result label="BMI" value={bmi.toFixed(1)} large />
      <Result label="Category" value={category} />
    </Results>
    <div className="calc-note">BMI is a screening measure for adults, not a diagnosis. It does not directly measure body fat and may not be appropriate for children or every individual.</div>
  </CalculatorShell>;
}

function parseDate(value) {
  return new Date(`${value}T00:00:00`);
}
export function DateCalculator() {
  const [start, setStart] = useState("2026-01-01");
  const [end, setEnd] = useState("2026-12-31");
  const a = parseDate(start), b = parseDate(end);
  const validDates = start && end && !Number.isNaN(a.getTime()) && !Number.isNaN(b.getTime());
  const days = validDates ? Math.max(0, Math.round((b - a) / 86400000)) : 0;
  const weeks = days / 7;
  const months = days / 30.4375;
  return <CalculatorShell title="Date Calculator" description="Find the number of days, weeks and approximate months between two dates.">
    <div className="form-grid">
      <Field label="Start date" type="date" value={start} onChange={setStart} />
      <Field label="End date" type="date" value={end} onChange={setEnd} />
    </div>
    <Results>
      <Result label="Days between dates" value={String(days)} large />
      <Result label="Weeks" value={weeks.toFixed(2)} />
      <Result label="Approx. months" value={months.toFixed(2)} />
    </Results>
    <div className="calc-note">The day count is based on calendar dates. The month figure is an approximation because calendar months have different lengths.</div>
  </CalculatorShell>;
}
