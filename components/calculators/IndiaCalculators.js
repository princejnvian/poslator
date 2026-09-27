"use client";
import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

const rupee = n => `₹${(Number.isFinite(n) ? n : 0).toFixed(2)}`;
const num = v => Number(v) || 0;
const pct = (base, rate) => Math.max(0, base) * Math.max(0, rate) / 100;

export function GradePayCalculator() {
  const [basic, setBasic] = useState("18000");
  const [grade, setGrade] = useState("2800");
  const [da, setDa] = useState("58");
  const [hra, setHra] = useState("10");
  const basicPay = num(basic), gradePay = num(grade), daAmt = pct(basicPay + gradePay, num(da));
  const hraAmt = pct(basicPay, num(hra));
  const gross = basicPay + gradePay + daAmt + hraAmt;
  return <CalculatorShell title="Grade Pay Calculator" description="Estimate basic pay, grade pay, DA, HRA and gross monthly salary using the inputs you provide.">
    <div className="form-grid">
      <Field label="Basic pay" value={basic} onChange={setBasic} suffix="₹" />
      <Field label="Grade pay" value={grade} onChange={setGrade} suffix="₹" />
      <Field label="DA rate" value={da} onChange={setDa} suffix="%" />
      <Field label="HRA rate" value={hra} onChange={setHra} suffix="%" />
    </div>
    <Results><Result label="Basic + grade pay" value={rupee(basicPay + gradePay)} /><Result label="Estimated DA" value={rupee(daAmt)} /><Result label="Estimated HRA" value={rupee(hraAmt)} /><Result label="Estimated gross salary" value={rupee(gross)} large /></Results>
    <div className="calc-note">Grade pay is a legacy pay-structure concept. This calculator is a planning tool; current government pay is generally organized through the 7th CPC pay matrix rather than a separate grade-pay component.</div>
  </CalculatorShell>;
}

export function PayCommissionCalculator() {
  const [basic, setBasic] = useState("29200");
  const [da, setDa] = useState("60");
  const [hra, setHra] = useState("10");
  const [ta, setTa] = useState("1800");
  const [nps, setNps] = useState("10");
  const base = num(basic), daAmt = pct(base, num(da)), hraAmt = pct(base, num(hra));
  const gross = base + daAmt + hraAmt + num(ta);
  const npsBase = base + daAmt, npsAmt = pct(npsBase, num(nps));
  return <CalculatorShell title="7th Pay Commission Salary Calculator" description="Estimate central government salary from basic pay, DA, HRA, transport allowance and an optional NPS deduction.">
    <div className="form-grid">
      <Field label="Basic pay" value={basic} onChange={setBasic} suffix="₹" />
      <Field label="DA rate" value={da} onChange={setDa} suffix="%" />
      <Field label="HRA rate" value={hra} onChange={setHra} suffix="%" />
      <Field label="Transport allowance" value={ta} onChange={setTa} suffix="₹" />
      <Field label="NPS employee rate" value={nps} onChange={setNps} suffix="%" />
    </div>
    <Results><Result label="DA" value={rupee(daAmt)} /><Result label="HRA" value={rupee(hraAmt)} /><Result label="Estimated gross" value={rupee(gross)} /><Result label="Estimated after NPS" value={rupee(gross - npsAmt)} large /></Results>
    <div className="calc-note">Use your applicable DA, HRA and allowance rates. Government pay, eligibility, deductions and NPS/UPS treatment can vary by employee and notification. This is an estimate, not an official salary statement.</div>
  </CalculatorShell>;
}

export function DACalculator() {
  const [basic, setBasic] = useState("30000"), [rate, setRate] = useState("58");
  const amount = pct(num(basic), num(rate));
  return <CalculatorShell title="DA Calculator India" description="Calculate Dearness Allowance from basic pay and a DA percentage for a quick salary estimate.">
    <div className="form-grid"><Field label="Basic pay" value={basic} onChange={setBasic} suffix="₹" /><Field label="DA rate" value={rate} onChange={setRate} suffix="%" /></div>
    <Results><Result label="Dearness allowance" value={rupee(amount)} large /><Result label="Basic + DA" value={rupee(num(basic) + amount)} /></Results>
    <div className="calc-note">Enter the DA percentage applicable to your pay category and period. DA rates can change through government or employer notifications.</div>
  </CalculatorShell>;
}

export function HRACalculator() {
  const [basic, setBasic] = useState("30000"), [hra, setHra] = useState("9000"), [rent, setRent] = useState("12000"), [city, setCity] = useState("40");
  const b=num(basic), h=num(hra), r=num(rent), cityRate=num(city);
  const exemption = Math.max(0, Math.min(h, r - b * 0.1, b * cityRate / 100));
  return <CalculatorShell title="HRA Calculator India" description="Estimate HRA exemption using rent, salary, HRA received and the applicable metro or non-metro percentage.">
    <div className="form-grid"><Field label="Basic salary" value={basic} onChange={setBasic} suffix="₹/month" /><Field label="HRA received" value={hra} onChange={setHra} suffix="₹/month" /><Field label="Monthly rent" value={rent} onChange={setRent} suffix="₹/month" /><Field label="Salary percentage for city" value={city} onChange={setCity} suffix="%" options={[["50","50% metro"],["40","40% non-metro"]]} /></div>
    <Results><Result label="Estimated HRA exemption" value={rupee(exemption)} large /><Result label="HRA potentially taxable" value={rupee(Math.max(0, h - exemption))} /></Results>
    <div className="calc-note">This uses the common old-regime HRA exemption formula: minimum of actual HRA, rent minus 10% of salary, and 50%/40% of salary for the selected city category. Actual tax treatment depends on your eligibility and tax regime.</div>
  </CalculatorShell>;
}

export function EPFCalculator() {
  const [wage, setWage] = useState("15000"), [employeeRate, setEmployeeRate] = useState("12"), [employerRate, setEmployerRate] = useState("3.67"), [years, setYears] = useState("20"), [interest, setInterest] = useState("8.25");
  const base=num(wage), ee=pct(base,num(employeeRate)), er=pct(base,num(employerRate)), monthly=ee+er, months=Math.max(0,Math.round(num(years)*12)), r=num(interest)/100/12;
  const future = r===0 ? monthly*months : monthly*((Math.pow(1+r,months)-1)/r);
  return <CalculatorShell title="EPF Calculator India" description="Estimate employee and employer EPF contributions and a simplified future EPF balance using your wage, contribution rates and assumed interest rate.">
    <div className="form-grid"><Field label="PF wage / basic + DA" value={wage} onChange={setWage} suffix="₹/month" /><Field label="Employee EPF rate" value={employeeRate} onChange={setEmployeeRate} suffix="%" /><Field label="Employer EPF share" value={employerRate} onChange={setEmployerRate} suffix="%" /><Field label="Years" value={years} onChange={setYears} suffix="years" /><Field label="Assumed annual interest" value={interest} onChange={setInterest} suffix="%" /></div>
    <Results><Result label="Employee contribution" value={rupee(ee)} /><Result label="Employer EPF share" value={rupee(er)} /><Result label="Monthly EPF addition" value={rupee(monthly)} /><Result label="Illustrated balance" value={rupee(future)} large /></Results>
    <div className="calc-note">EPFO states the standard employee contribution is 12% and the employer share is split between EPF/EPS under applicable rules. This simplified calculator lets you control the wage base and employer EPF share; it does not model every EPS, ceiling, transfer or interest-credit detail.</div>
  </CalculatorShell>;
}

export function GratuityCalculator() {
  const [basicDa, setBasicDa] = useState("40000"), [years, setYears] = useState("10");
  const completed = Math.max(0, Math.floor(num(years))), gratuity = num(basicDa) * 15 / 26 * completed;
  return <CalculatorShell title="Gratuity Calculator India" description="Estimate gratuity using last drawn basic salary plus DA and completed years of service.">
    <div className="form-grid"><Field label="Last drawn basic + DA" value={basicDa} onChange={setBasicDa} suffix="₹/month" /><Field label="Completed years of service" value={years} onChange={setYears} suffix="years" /></div>
    <Results><Result label="Estimated gratuity" value={rupee(gratuity)} large /><Result label="Formula" value="(Basic + DA) × 15/26 × years" /></Results>
    <div className="calc-note">This is the common gratuity formula used for eligible employees covered by the applicable gratuity rules. Eligibility, service rounding, statutory ceilings and tax treatment can affect the final amount.</div>
  </CalculatorShell>;
}

export function NPSCalculator() {
  const [monthly, setMonthly] = useState("5000"), [years, setYears] = useState("25"), [rate, setRate] = useState("10"), [annuity, setAnnuity] = useState("40"), [annuityRate, setAnnuityRate] = useState("6");
  const p=num(monthly), months=Math.max(0,Math.round(num(years)*12)), r=num(rate)/100/12;
  const corpus=r===0?p*months:p*((Math.pow(1+r,months)-1)/r), annuityCorpus=corpus*num(annuity)/100, lump=corpus-annuityCorpus, monthlyPension=annuityCorpus*num(annuityRate)/100/12;
  return <CalculatorShell title="NPS Calculator India" description="Project a National Pension System corpus from monthly contributions, an assumed return and retirement period, then estimate an annuity-based monthly pension.">
    <div className="form-grid"><Field label="Monthly contribution" value={monthly} onChange={setMonthly} suffix="₹" /><Field label="Investment period" value={years} onChange={setYears} suffix="years" /><Field label="Assumed annual return" value={rate} onChange={setRate} suffix="%" /><Field label="Annuity share" value={annuity} onChange={setAnnuity} suffix="%" /><Field label="Assumed annuity rate" value={annuityRate} onChange={setAnnuityRate} suffix="%" /></div>
    <Results><Result label="Projected corpus" value={rupee(corpus)} large /><Result label="Illustrated lump-sum portion" value={rupee(lump)} /><Result label="Annuity corpus" value={rupee(annuityCorpus)} /><Result label="Illustrated monthly pension" value={rupee(monthlyPension)} /></Results>
    <div className="calc-note">NPS returns are market-linked and are not guaranteed. Annuity rates, withdrawal rules and tax treatment can change. This is a projection, not an official NPS benefit statement.</div>
  </CalculatorShell>;
}

export function GSTCalculator() {
  const [amount, setAmount] = useState("1000"), [rate, setRate] = useState("18"), [mode, setMode] = useState("exclusive");
  const a=num(amount), r=num(rate); const tax=mode==="exclusive"?a*r/100:a*r/(100+r); const total=mode==="exclusive"?a+tax:a;
  return <CalculatorShell title="GST Calculator India" description="Calculate GST amount and final price, or extract GST from an inclusive price using a GST rate.">
    <div className="form-grid"><Field label="Amount / GST-inclusive price" value={amount} onChange={setAmount} suffix="₹" /><Field label="GST rate" value={rate} onChange={setRate} suffix="%" /><Field label="Calculation" value={mode} onChange={setMode} options={[["exclusive","Add GST to price"],["inclusive","Extract GST from total"]]} /></div>
    <Results><Result label="GST amount" value={rupee(tax)} large /><Result label="Pre-GST amount" value={rupee(mode==="exclusive"?a:a-tax)} /><Result label="Final / inclusive price" value={rupee(total)} /></Results>
    <div className="calc-note">Use the GST rate applicable to your goods or services. This calculator does not determine whether a transaction is taxable or which rate applies.</div>
  </CalculatorShell>;
}

export function CTCInHandIndiaCalculator() {
  const [ctc, setCtc] = useState("600000"), [bonus, setBonus] = useState("10"), [epf, setEpf] = useState("1800"), [pt, setPt] = useState("200"), [other, setOther] = useState("0");
  const annualCtc=num(ctc), bonusAmt=pct(annualCtc,num(bonus)), monthlyGross=(annualCtc-bonusAmt)/12, monthlyCuts=num(epf)+num(pt)+num(other), annualTake=Math.max(0, annualCtc-bonusAmt-monthlyCuts*12);
  return <CalculatorShell title="CTC to In-Hand Salary Calculator India" description="Estimate monthly take-home salary from annual CTC after bonus, employee PF, professional tax and other deductions.">
    <div className="form-grid"><Field label="Annual CTC" value={ctc} onChange={setCtc} suffix="₹" /><Field label="Variable bonus in CTC" value={bonus} onChange={setBonus} suffix="%" /><Field label="Monthly employee PF" value={epf} onChange={setEpf} suffix="₹" /><Field label="Monthly professional tax" value={pt} onChange={setPt} suffix="₹" /><Field label="Other monthly deductions" value={other} onChange={setOther} suffix="₹" /></div>
    <Results><Result label="Estimated monthly fixed gross" value={rupee(monthlyGross)} /><Result label="Estimated monthly in-hand" value={rupee(annualTake/12)} large /><Result label="Estimated annual in-hand" value={rupee(annualTake)} /><Result label="Bonus portion" value={rupee(bonusAmt)} /></Results>
    <div className="calc-note">CTC structures differ between employers. Employer PF, gratuity, insurance, bonus timing, income tax and other benefits may be included in CTC, so treat this as a budgeting estimate rather than a payslip calculation.</div>
  </CalculatorShell>;
}

export function SalaryIncrementIndiaCalculator() {
  const [salary, setSalary] = useState("50000"), [increase, setIncrease] = useState("10");
  const old=num(salary), inc=pct(old,num(increase));
  return <CalculatorShell title="Salary Increment Calculator India" description="Calculate your salary hike percentage, increase amount and new monthly salary.">
    <div className="form-grid"><Field label="Current monthly salary" value={salary} onChange={setSalary} suffix="₹" /><Field label="Increment" value={increase} onChange={setIncrease} suffix="%" /></div>
    <Results><Result label="Increase amount" value={rupee(inc)} /><Result label="New monthly salary" value={rupee(old+inc)} large /><Result label="New annual salary" value={rupee((old+inc)*12)} /></Results>
    <div className="calc-note">This calculator applies a simple percentage hike to your current salary. Actual CTC changes can include bonus, PF, gratuity and other components.</div>
  </CalculatorShell>;
}

function slabTax(income, slabs) {
  let tax=0, prev=0;
  for (const [limit, rate] of slabs) { const portion=Math.max(0, Math.min(income,limit)-prev); tax += portion*rate; prev=limit; if(income<=limit) break; }
  if(income>prev) tax += (income-prev)*slabs[slabs.length-1][1];
  return tax;
}
export function IncomeTaxIndiaCalculator() {
  const [salary, setSalary] = useState("1000000"), [regime, setRegime] = useState("new");
  const gross=Math.max(0,num(salary));
  const deduction=regime==="new"?Math.min(gross,75000):Math.min(gross,50000);
  const taxable=Math.max(0,gross-deduction);
  const slabs=regime==="new"?[[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]]:[[250000,0],[500000,.05],[1000000,.20],[Infinity,.30]];
  let tax=slabTax(taxable,slabs);
  const rebate=regime==="new" && taxable<=1200000 ? Math.min(tax,60000) : regime==="old" && taxable<=500000 ? Math.min(tax,12500) : 0;
  tax=Math.max(0,tax-rebate); const cess=tax*0.04, total=tax+cess;
  return <CalculatorShell title="Income Tax Calculator India" description="Estimate individual income tax under the AY 2026-27 new or old regime using current published slab rates, standard deduction and rebate assumptions.">
    <div className="form-grid"><Field label="Annual salary / income" value={salary} onChange={setSalary} suffix="₹" /><Field label="Tax regime" value={regime} onChange={setRegime} options={[["new","New regime"],["old","Old regime"]]} /></div>
    <Results><Result label="Standard deduction used" value={rupee(deduction)} /><Result label="Estimated taxable income" value={rupee(taxable)} /><Result label="Estimated income tax + cess" value={rupee(total)} large /><Result label="Approx. monthly tax" value={rupee(total/12)} /></Results>
    <div className="calc-note">For AY 2026-27. This is a simplified salary-income estimate and does not model every deduction, special-rate income, surcharge or marginal-relief case. Verify your exact liability with the official Income Tax Department tools or a tax professional.</div>
  </CalculatorShell>;
}

export function PPFCalculator() {
  const [initial, setInitial] = useState("0"), [annual, setAnnual] = useState("150000"), [rate, setRate] = useState("7.1"), [years, setYears] = useState("15");
  const months=Math.max(0,Math.round(num(years)*12)), monthly=num(annual)/12, r=num(rate)/100/12, future=r===0?num(initial)+monthly*months:num(initial)*Math.pow(1+r,months)+monthly*((Math.pow(1+r,months)-1)/r);
  return <CalculatorShell title="PPF Calculator India" description="Estimate PPF growth from an opening balance, annual contribution, assumed interest rate and investment period.">
    <div className="form-grid"><Field label="Opening balance" value={initial} onChange={setInitial} suffix="₹" /><Field label="Annual contribution" value={annual} onChange={setAnnual} suffix="₹" /><Field label="Assumed annual rate" value={rate} onChange={setRate} suffix="%" /><Field label="Investment period" value={years} onChange={setYears} suffix="years" /></div>
    <Results><Result label="Estimated maturity value" value={rupee(future)} large /><Result label="Total contributions" value={rupee(num(initial)+num(annual)*num(years))} /><Result label="Illustrated interest" value={rupee(Math.max(0,future-num(initial)-num(annual)*num(years)))} /></Results>
    <div className="calc-note">PPF interest rates and scheme rules are notified by the Government and can change. Enter the rate you want to model rather than treating the default as a guaranteed future rate.</div>
  </CalculatorShell>;
}

export function SIPCalculatorIndia() {
  const [monthly, setMonthly] = useState("5000"), [rate, setRate] = useState("12"), [years, setYears] = useState("15");
  const m=num(monthly), months=Math.max(0,Math.round(num(years)*12)), r=num(rate)/100/12, future=r===0?m*months:m*((Math.pow(1+r,months)-1)/r), invested=m*months;
  return <CalculatorShell title="SIP Calculator India" description="Estimate the potential future value of monthly SIP investments from your contribution, expected annual return and time horizon.">
    <div className="form-grid"><Field label="Monthly SIP" value={monthly} onChange={setMonthly} suffix="₹" /><Field label="Expected annual return" value={rate} onChange={setRate} suffix="%" /><Field label="Investment period" value={years} onChange={setYears} suffix="years" /></div>
    <Results><Result label="Estimated future value" value={rupee(future)} large /><Result label="Total invested" value={rupee(invested)} /><Result label="Estimated growth" value={rupee(Math.max(0,future-invested))} /></Results>
    <div className="calc-note">SIP and mutual-fund returns are market-linked and not guaranteed. This mathematical projection does not account for taxes, expense ratios or exit loads.</div>
  </CalculatorShell>;
}
