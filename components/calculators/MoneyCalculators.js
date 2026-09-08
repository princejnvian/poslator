"use client";
import { useMemo, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

const money=n=>`$${(Number.isFinite(n)?n:0).toFixed(2)}`;

export function SalaryCalculator() {
  const [amount,setAmount]=useState("25"),[mode,setMode]=useState("hourly"),[hours,setHours]=useState("40"),[weeks,setWeeks]=useState("52");
  const a=Number(amount)||0,h=Number(hours)||0,w=Number(weeks)||0;
  const annual=mode==="hourly"?a*h*w:mode==="weekly"?a*w:mode==="monthly"?a*12:a;
  return <CalculatorShell title="Salary Calculator" description="Convert hourly, weekly, monthly and annual pay into comparable salary figures.">
    <div className="form-grid"><Field label="Pay amount" value={amount} onChange={setAmount} suffix="$"/><Field label="Pay frequency" value={mode} onChange={setMode} options={[["hourly","Hourly"],["weekly","Weekly"],["monthly","Monthly"],["annual","Annual"]]}/><Field label="Hours per week" value={hours} onChange={setHours} suffix="hours"/><Field label="Weeks per year" value={weeks} onChange={setWeeks}/></div>
    <Results><Result label="Annual salary" value={money(annual)} large/><Result label="Monthly" value={money(annual/12)}/><Result label="Weekly" value={money(annual/w)}/><Result label="Hourly (40 hr/week)" value={money(annual/(w*40))}/></Results>
  </CalculatorShell>;
}

export function PaycheckCalculator() {
  const [gross,setGross]=useState("2000"),[federal,setFederal]=useState("12"),[state,setState]=useState("5"),[fica,setFica]=useState("7.65"),[ded,setDed]=useState("0");
  const g=Number(gross)||0, f=Number(federal)||0,s=Number(state)||0,fc=Number(fica)||0,d=Number(ded)||0;
  const federalAmt=g*f/100,stateAmt=g*s/100,ficaAmt=g*fc/100,net=Math.max(0,g-federalAmt-stateAmt-ficaAmt-d);
  return <CalculatorShell title="Paycheck Calculator" description="A simple planning estimate for gross pay, taxes and take-home pay.">
    <div className="form-grid"><Field label="Gross paycheck" value={gross} onChange={setGross} suffix="$"/><Field label="Federal withholding" value={federal} onChange={setFederal} suffix="%"/><Field label="State/local withholding" value={state} onChange={setState} suffix="%"/><Field label="Social Security + Medicare" value={fica} onChange={setFica} suffix="%"/><Field label="Other deductions" value={ded} onChange={setDed} suffix="$"/></div>
    <Results><Result label="Gross pay" value={money(g)} /><Result label="Estimated taxes & deductions" value={money(federalAmt+stateAmt+ficaAmt+d)}/><Result label="Estimated take-home" value={money(net)} large/></Results>
    <div className="calc-note">Planning estimate only. Actual US withholding depends on filing status, W-4 elections, state/local rules, benefits and other deductions.</div>
  </CalculatorShell>;
}

export function TakeHomePayCalculator() {
  const [gross,setGross]=useState("75000"),[federal,setFederal]=useState("12"),[state,setState]=useState("5"),[fica,setFica]=useState("7.65"),[other,setOther]=useState("3000");
  const g=Number(gross)||0, f=Number(federal)||0,s=Number(state)||0,fc=Number(fica)||0,o=Number(other)||0;
  const annual=Math.max(0,g-g*f/100-g*s/100-g*fc/100-o);
  return <CalculatorShell title="Take Home Pay Calculator" description="Estimate annual take-home pay after simple tax and deduction assumptions.">
    <div className="form-grid"><Field label="Gross annual salary" value={gross} onChange={setGross} suffix="$"/><Field label="Federal estimate" value={federal} onChange={setFederal} suffix="%"/><Field label="State/local estimate" value={state} onChange={setState} suffix="%"/><Field label="FICA estimate" value={fica} onChange={setFica} suffix="%"/><Field label="Other annual deductions" value={other} onChange={setOther} suffix="$"/></div>
    <Results><Result label="Estimated annual take-home" value={money(annual)} large/><Result label="Monthly" value={money(annual/12)}/><Result label="Biweekly" value={money(annual/26)}/></Results>
    <div className="calc-note">This is an educational estimate, not tax advice or an official payroll calculation.</div>
  </CalculatorShell>;
}

export function TipCalculator() {
  const [bill,setBill]=useState("75"),[tip,setTip]=useState("20"),[people,setPeople]=useState("2");
  const b=Number(bill)||0,t=Number(tip)||0,p=Math.max(1,Number(people)||1),tipAmt=b*t/100,total=b+tipAmt;
  return <CalculatorShell title="Tip Calculator" description="Calculate a tip, total bill and each person's share.">
    <div className="form-grid"><Field label="Bill amount" value={bill} onChange={setBill} suffix="$"/><Field label="Tip percentage" value={tip} onChange={setTip} suffix="%"/><Field label="Number of people" value={people} onChange={setPeople}/></div>
    <Results><Result label="Tip" value={money(tipAmt)}/><Result label="Total" value={money(total)} large/><Result label="Per person" value={money(total/p)}/></Results>
  </CalculatorShell>;
}

export function DiscountCalculator() {
  const [price,setPrice]=useState("80"),[discount,setDiscount]=useState("15"),[tax,setTax]=useState("0");
  const p=Number(price)||0,d=Number(discount)||0,t=Number(tax)||0,saved=p*d/100,after=p-saved,final=after*(1+t/100);
  return <CalculatorShell title="Discount Calculator" description="Find your savings, sale price and optional price after sales tax.">
    <div className="form-grid"><Field label="Original price" value={price} onChange={setPrice} suffix="$"/><Field label="Discount" value={discount} onChange={setDiscount} suffix="%"/><Field label="Sales tax (optional)" value={tax} onChange={setTax} suffix="%"/></div>
    <Results><Result label="You save" value={money(saved)}/><Result label="Price after discount" value={money(after)} large/><Result label="Final with tax" value={money(final)}/></Results>
  </CalculatorShell>;
}

export function SalesTaxCalculator() {
  const [amount,setAmount]=useState("100"),[rate,setRate]=useState("8.25");
  const a=Number(amount)||0,r=Number(rate)||0,tax=a*r/100;
  return <CalculatorShell title="Sales Tax Calculator" description="Add or remove a sales tax rate from a purchase amount.">
    <div className="form-grid"><Field label="Purchase amount" value={amount} onChange={setAmount} suffix="$"/><Field label="Sales tax rate" value={rate} onChange={setRate} suffix="%"/></div>
    <Results><Result label="Sales tax" value={money(tax)}/><Result label="Total price" value={money(a+tax)} large/></Results>
    <div className="calc-note">Enter the combined state/local rate you want to use. US sales tax varies by jurisdiction.</div>
  </CalculatorShell>;
}

export function PercentageCalculator() {
  const [a,setA]=useState("20"),[b,setB]=useState("85"),[old,setOld]=useState("100"),[neu,setNeu]=useState("120");
  const of=(Number(a)||0)*(Number(b)||0)/100, change=(Number(old)||0)===0?0:((Number(neu)||0-Number(old)||0)/(Number(old)||1))*100;
  return <CalculatorShell title="Percentage Calculator" description="Calculate a percentage of a number and percentage change.">
    <div className="form-grid"><Field label="What percent?" value={a} onChange={setA} suffix="%"/><Field label="Of number" value={b} onChange={setB}/><Field label="Old value" value={old} onChange={setOld}/><Field label="New value" value={neu} onChange={setNeu}/></div>
    <Results><Result label={`${a}% of ${b}`} value={of.toFixed(2)} large/><Result label="Percentage change" value={`${change.toFixed(2)}%`}/></Results>
  </CalculatorShell>;
}
