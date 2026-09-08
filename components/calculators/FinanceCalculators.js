"use client";
import { useMemo, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

const money=n=>`$${(Number.isFinite(n)?n:0).toFixed(2)}`;

function monthlyPayment(principal, annualRate, months) {
  const r=annualRate/100/12;
  if (!principal || !months) return 0;
  if (r===0) return principal/months;
  return principal*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1);
}

export function AmortizationCalculator() {
  const [principal,setPrincipal]=useState("320000"),[rate,setRate]=useState("6.5"),[years,setYears]=useState("30");
  const p=Number(principal)||0,r=Number(rate)||0,n=(Number(years)||0)*12, payment=monthlyPayment(p,r,n), total=payment*n, interest=Math.max(0,total-p);
  return <CalculatorShell title="Amortization Calculator" description="Estimate monthly payment and total interest for a fixed-rate loan.">
    <div className="form-grid"><Field label="Loan amount" value={principal} onChange={setPrincipal} suffix="$"/><Field label="Interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Loan term" value={years} onChange={setYears} suffix="years"/></div>
    <Results><Result label="Monthly payment" value={money(payment)} large/><Result label="Total of payments" value={money(total)}/><Result label="Total interest" value={money(interest)}/></Results>
    <div className="explain"><h3>What is amortization?</h3><p>An amortization schedule shows how each payment is divided between interest and principal over the life of a fixed-rate loan.</p></div>
  </CalculatorShell>;
}

export function MortgageCalculator() {
  const [home,setHome]=useState("400000"),[down,setDown]=useState("80000"),[rate,setRate]=useState("6.5"),[years,setYears]=useState("30"),[tax,setTax]=useState("3000"),[insurance,setInsurance]=useState("1800");
  const hv=Number(home)||0,dp=Number(down)||0,p=Math.max(0,hv-dp),r=Number(rate)||0,n=(Number(years)||0)*12;
  const pi=monthlyPayment(p,r,n), monthlyTax=(Number(tax)||0)/12, monthlyIns=(Number(insurance)||0)/12, total=pi+monthlyTax+monthlyIns;
  return <CalculatorShell title="Mortgage Calculator" description="Estimate principal and interest plus optional property tax and homeowners insurance.">
    <div className="form-grid"><Field label="Home price" value={home} onChange={setHome} suffix="$"/><Field label="Down payment" value={down} onChange={setDown} suffix="$"/><Field label="Interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Loan term" value={years} onChange={setYears} suffix="years"/><Field label="Property tax / year" value={tax} onChange={setTax} suffix="$"/><Field label="Home insurance / year" value={insurance} onChange={setInsurance} suffix="$"/></div>
    <Results><Result label="Loan amount" value={money(p)}/><Result label="Principal & interest" value={money(pi)} large/><Result label="Estimated total monthly" value={money(total)}/></Results>
    <div className="calc-note">Estimate only. PMI, HOA dues, closing costs, lender fees and other costs are not included unless entered through the fields above.</div>
  </CalculatorShell>;
}

export function CarAffordabilityCalculator() {
  const [income,setIncome]=useState("75000"),[debt,setDebt]=useState("800"),[down,setDown]=useState("5000"),[rate,setRate]=useState("7"),[term,setTerm]=useState("60"),[paymentPct,setPaymentPct]=useState("10");
  const annual=Number(income)||0, monthlyIncome=annual/12, debts=Number(debt)||0, pct=Number(paymentPct)||0, target=Math.max(0,monthlyIncome*pct/100-debts);
  const n=Number(term)||60, r=(Number(rate)||0)/100/12, pv=target*(r===0?n:(Math.pow(1+r,n)-1)/(r*Math.pow(1+r,n))), maxPrice=Math.max(0,pv+Number(down||0));
  return <CalculatorShell title="Car Affordability Calculator" description="Estimate a car price from income, existing monthly debt, down payment and target payment.">
    <div className="form-grid"><Field label="Annual income" value={income} onChange={setIncome} suffix="$"/><Field label="Existing monthly debt" value={debt} onChange={setDebt} suffix="$"/><Field label="Down payment" value={down} onChange={setDown} suffix="$"/><Field label="Interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Loan term" value={term} onChange={setTerm} suffix="months"/><Field label="Car payment target" value={paymentPct} onChange={setPaymentPct} suffix="% of monthly income"/></div>
    <Results><Result label="Target monthly car payment" value={money(target)} /><Result label="Estimated financed amount" value={money(pv)}/><Result label="Estimated max car price" value={money(maxPrice)} large/></Results>
    <div className="calc-note">This is a budgeting estimate, not a lender approval. Insurance, fuel, maintenance, registration and taxes can materially change total ownership cost.</div>
  </CalculatorShell>;
}
