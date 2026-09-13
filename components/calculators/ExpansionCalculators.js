"use client";
import { useMemo, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

const money = n => `$${(Number.isFinite(n) ? n : 0).toFixed(2)}`;
const num = v => Number(v) || 0;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
function monthlyGrowth(p, monthly, rate, months) {
  let value = p;
  for (let i=0;i<months;i++) value = value*(1+rate/12)+monthly;
  return value;
}
function loanPayment(principal, annualRate, months) {
  const r=annualRate/100/12;
  if (!principal || !months) return 0;
  if (!r) return principal/months;
  return principal*r/(1-Math.pow(1+r,-months));
}
function monthsToPayoff(balance, annualRate, payment) {
  const r=annualRate/100/12;
  if (balance<=0) return 0;
  if (payment<=balance*r) return Infinity;
  if (!r) return Math.ceil(balance/payment);
  return Math.ceil(-Math.log(1-balance*r/payment)/Math.log(1+r));
}
function dateDays(a,b){ if(!a||!b) return 0; return Math.round((new Date(`${b}T00:00:00`)-new Date(`${a}T00:00:00`))/86400000); }
function gcd(a,b){ a=Math.abs(Math.trunc(a)); b=Math.abs(Math.trunc(b)); while(b){[a,b]=[b,a%b]} return a; }
function lcm(a,b){a=Math.abs(Math.trunc(a));b=Math.abs(Math.trunc(b));return a&&b?Math.abs(a*b)/gcd(a,b):0;}

export function MortgagePayoffCalculator(){
 const [bal,setBal]=useState("300000"),[rate,setRate]=useState("6.5"),[pay,setPay]=useState("1896"),[extra,setExtra]=useState("0");
 const b=num(bal),r=num(rate),p=num(pay)+num(extra),m=monthsToPayoff(b,r,p),interest=Number.isFinite(m)?Math.max(0,p*m-b):0;
 return <CalculatorShell title="Mortgage Payoff Calculator" description="Estimate how long it can take to pay off a mortgage and how extra payments may reduce interest."><div className="form-grid"><Field label="Current mortgage balance" value={bal} onChange={setBal} suffix="$"/><Field label="Interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Monthly payment" value={pay} onChange={setPay} suffix="$"/><Field label="Extra monthly payment" value={extra} onChange={setExtra} suffix="$"/></div><Results><Result label="Payoff time" value={Number.isFinite(m)?`${Math.floor(m/12)}y ${m%12}m`:"Not paid off"} large/><Result label="Estimated payments" value={Number.isFinite(m)?money(p*m):"—"}/><Result label="Estimated interest" value={Number.isFinite(m)?money(interest):"—"}/></Results><div className="calc-note">Estimate assumes a fixed rate and consistent monthly payments. Actual mortgage terms, escrow, fees and payment timing can differ.</div></CalculatorShell>;
}

export function RetirementCalculator(){
 const [current,setCurrent]=useState("25000"),[contrib,setContrib]=useState("500"),[rate,setRate]=useState("7"),[years,setYears]=useState("30");
 const v=monthlyGrowth(num(current),num(contrib),num(rate),Math.max(0,Math.round(num(years)*12)));
 return <CalculatorShell title="Retirement Calculator" description="Project how current savings and regular contributions could grow toward retirement."><div className="form-grid"><Field label="Current retirement savings" value={current} onChange={setCurrent} suffix="$"/><Field label="Monthly contribution" value={contrib} onChange={setContrib} suffix="$"/><Field label="Annual return" value={rate} onChange={setRate} suffix="%"/><Field label="Years to retirement" value={years} onChange={setYears} suffix="years"/></div><Results><Result label="Estimated retirement savings" value={money(v)} large/><Result label="Your contributions" value={money(num(current)+num(contrib)*num(years)*12)}/><Result label="Estimated growth" value={money(Math.max(0,v-num(current)-num(contrib)*num(years)*12))}/></Results><div className="calc-note">Illustration only. Investment returns are not guaranteed and real retirement planning should account for inflation, taxes, fees and changing contributions.</div></CalculatorShell>;
}

export function SavingsCalculator(){
 const [initial,setInitial]=useState("5000"),[monthly,setMonthly]=useState("300"),[rate,setRate]=useState("4.5"),[years,setYears]=useState("10");
 const v=monthlyGrowth(num(initial),num(monthly),num(rate),Math.round(num(years)*12));
 return <CalculatorShell title="Savings Calculator" description="Estimate how an initial deposit and regular savings contributions can grow with interest."><div className="form-grid"><Field label="Initial savings" value={initial} onChange={setInitial} suffix="$"/><Field label="Monthly contribution" value={monthly} onChange={setMonthly} suffix="$"/><Field label="Annual interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Time" value={years} onChange={setYears} suffix="years"/></div><Results><Result label="Future savings" value={money(v)} large/><Result label="Total deposited" value={money(num(initial)+num(monthly)*num(years)*12)}/><Result label="Interest earned" value={money(Math.max(0,v-num(initial)-num(monthly)*num(years)*12))}/></Results></CalculatorShell>;
}

export function DebtPayoffCalculator(){
 const [bal,setBal]=useState("10000"),[rate,setRate]=useState("22"),[pay,setPay]=useState("300"); const m=monthsToPayoff(num(bal),num(rate),num(pay)); const total=Number.isFinite(m)?num(pay)*m:0;
 return <CalculatorShell title="Debt Payoff Calculator" description="Estimate how many months it may take to pay off a balance at a fixed payment and interest rate."><div className="form-grid"><Field label="Current balance" value={bal} onChange={setBal} suffix="$"/><Field label="Annual interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Monthly payment" value={pay} onChange={setPay} suffix="$"/></div><Results><Result label="Payoff time" value={Number.isFinite(m)?`${Math.floor(m/12)}y ${m%12}m`:"Payment too low"} large/><Result label="Total paid" value={Number.isFinite(m)?money(total):"—"}/><Result label="Interest" value={Number.isFinite(m)?money(Math.max(0,total-num(bal))):"—"}/></Results></CalculatorShell>;
}

export function FourOhOneKCalculator(){
 const [salary,setSalary]=useState("75000"),[current,setCurrent]=useState("15000"),[contrib,setContrib]=useState("8"),[match,setMatch]=useState("4"),[rate,setRate]=useState("7"),[years,setYears]=useState("30"); const annual=num(salary)*num(contrib)/100+num(salary)*Math.min(num(contrib),num(match))/100; const v=monthlyGrowth(num(current),annual/12,num(rate),num(years)*12);
 return <CalculatorShell title="401(k) Calculator" description="Estimate potential 401(k) growth using salary contributions, an employer match and an assumed return."><div className="form-grid"><Field label="Annual salary" value={salary} onChange={setSalary} suffix="$"/><Field label="Current 401(k) balance" value={current} onChange={setCurrent} suffix="$"/><Field label="Your contribution" value={contrib} onChange={setContrib} suffix="%"/><Field label="Employer match" value={match} onChange={setMatch} suffix="%"/><Field label="Annual return" value={rate} onChange={setRate} suffix="%"/><Field label="Years" value={years} onChange={setYears}/></div><Results><Result label="Estimated balance" value={money(v)} large/><Result label="Annual contribution" value={money(annual)}/><Result label="Estimated growth" value={money(Math.max(0,v-num(current)-annual*num(years)))}/></Results><div className="calc-note">This simplified model assumes the employer matches up to the percentage entered. Actual 401(k) plans have limits, vesting rules and plan-specific matching formulas.</div></CalculatorShell>;
}

export function RothIRACalculator(){
 const [current,setCurrent]=useState("10000"),[annual,setAnnual]=useState("7000"),[rate,setRate]=useState("7"),[years,setYears]=useState("25"); const v=monthlyGrowth(num(current),num(annual)/12,num(rate),num(years)*12);
 return <CalculatorShell title="Roth IRA Calculator" description="Project potential Roth IRA growth from a current balance and recurring contributions."><div className="form-grid"><Field label="Current Roth IRA balance" value={current} onChange={setCurrent} suffix="$"/><Field label="Annual contribution" value={annual} onChange={setAnnual} suffix="$"/><Field label="Annual return" value={rate} onChange={setRate} suffix="%"/><Field label="Years" value={years} onChange={setYears}/></div><Results><Result label="Estimated future value" value={money(v)} large/><Result label="Total contributions" value={money(num(current)+num(annual)*num(years))}/><Result label="Estimated growth" value={money(Math.max(0,v-num(current)-num(annual)*num(years)))}/></Results><div className="calc-note">Illustration only. Contribution limits, eligibility, investment returns and tax rules can change.</div></CalculatorShell>;
}

export function APYCalculator(){
 const [principal,setPrincipal]=useState("10000"),[rate,setRate]=useState("4.5"),[n,setN]=useState("12"); const r=num(rate)/100, periods=Math.max(1,Math.round(num(n))); const apy=(Math.pow(1+r/periods,periods)-1)*100; const earned=num(principal)*(apy/100);
 return <CalculatorShell title="APY Calculator" description="Calculate annual percentage yield from an interest rate and compounding frequency."><div className="form-grid"><Field label="Deposit" value={principal} onChange={setPrincipal} suffix="$"/><Field label="Nominal interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Compounds per year" value={n} onChange={setN}/></div><Results><Result label="APY" value={`${apy.toFixed(3)}%`} large/><Result label="One-year interest" value={money(earned)}/><Result label="End balance" value={money(num(principal)+earned)}/></Results></CalculatorShell>;
}

export function APRCalculator(){
 const [amount,setAmount]=useState("20000"),[rate,setRate]=useState("8"),[fees,setFees]=useState("500"),[years,setYears]=useState("5"); const principal=num(amount), months=Math.max(1,Math.round(num(years)*12)), pay=loanPayment(principal,num(rate),months), net=Math.max(1,principal-num(fees));
 let lo=0,hi=.5; for(let i=0;i<80;i++){const mid=(lo+hi)/2; const pv=pay*(1-Math.pow(1+mid,-months))/mid; if(mid===0||pv>net)lo=mid;else hi=mid;} const apr=lo*12*100;
 return <CalculatorShell title="APR Calculator" description="Estimate an annual percentage rate by including upfront loan fees with the stated interest rate."><div className="form-grid"><Field label="Loan amount" value={amount} onChange={setAmount} suffix="$"/><Field label="Interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Upfront fees" value={fees} onChange={setFees} suffix="$"/><Field label="Loan term" value={years} onChange={setYears} suffix="years"/></div><Results><Result label="Estimated APR" value={`${apr.toFixed(3)}%`} large/><Result label="Monthly payment" value={money(pay)}/><Result label="Financed after fees" value={money(net)}/></Results><div className="calc-note">APR rules vary by loan type and lender. This is a simplified estimate using the entered upfront fees and fixed-rate payment.</div></CalculatorShell>;
}

export function InterestRateCalculator(){
 const [principal,setPrincipal]=useState("10000"),[interest,setInterest]=useState("1500"),[years,setYears]=useState("3"); const rate=num(principal)&&num(years)?num(interest)/num(principal)/num(years)*100:0;
 return <CalculatorShell title="Interest Rate Calculator" description="Find a simple annual interest rate from principal, interest earned and time."><div className="form-grid"><Field label="Principal" value={principal} onChange={setPrincipal} suffix="$"/><Field label="Interest earned" value={interest} onChange={setInterest} suffix="$"/><Field label="Time" value={years} onChange={setYears} suffix="years"/></div><Results><Result label="Simple annual rate" value={`${rate.toFixed(3)}%`} large/><Result label="Total amount" value={money(num(principal)+num(interest))}/></Results><div className="calc-note">This uses a simple-interest relationship. Compound-interest products require a different calculation.</div></CalculatorShell>;
}

export function DebtToIncomeCalculator(){
 const [income,setIncome]=useState("6000"),[housing,setHousing]=useState("1800"),[car,setCar]=useState("450"),[cards,setCards]=useState("200"),[other,setOther]=useState("150"); const debts=num(housing)+num(car)+num(cards)+num(other), dti=num(income)?debts/num(income)*100:0;
 return <CalculatorShell title="Debt-to-Income Ratio Calculator" description="Calculate your monthly debt-to-income ratio from gross income and recurring debt payments."><div className="form-grid"><Field label="Gross monthly income" value={income} onChange={setIncome} suffix="$"/><Field label="Housing payment" value={housing} onChange={setHousing} suffix="$"/><Field label="Auto loans" value={car} onChange={setCar} suffix="$"/><Field label="Credit card minimums" value={cards} onChange={setCards} suffix="$"/><Field label="Other monthly debt" value={other} onChange={setOther} suffix="$"/></div><Results><Result label="DTI ratio" value={`${dti.toFixed(1)}%`} large/><Result label="Monthly debt" value={money(debts)}/><Result label="Income after debt" value={money(num(income)-debts)}/></Results><div className="calc-note">Lenders can calculate DTI differently and may include or exclude certain obligations. Use this as a budgeting estimate.</div></CalculatorShell>;
}

export function EmergencyFundCalculator(){
 const [expense,setExpense]=useState("3000"),[months,setMonths]=useState("6"),[saved,setSaved]=useState("5000"); const target=num(expense)*num(months);
 return <CalculatorShell title="Emergency Fund Calculator" description="Estimate an emergency savings target based on essential monthly expenses and a chosen number of months."><div className="form-grid"><Field label="Essential monthly expenses" value={expense} onChange={setExpense} suffix="$"/><Field label="Months of expenses" value={months} onChange={setMonths}/><Field label="Current emergency savings" value={saved} onChange={setSaved} suffix="$"/></div><Results><Result label="Target fund" value={money(target)} large/><Result label="Still needed" value={money(Math.max(0,target-num(saved)))}/><Result label="Months covered now" value={num(expense)?(num(saved)/num(expense)).toFixed(1):"0.0"}/></Results></CalculatorShell>;
}

export function NetWorthCalculator(){
 const [cash,setCash]=useState("10000"),[invest,setInvest]=useState("25000"),[home,setHome]=useState("200000"),[car,setCar]=useState("18000"),[mort,setMort]=useState("150000"),[other,setOther]=useState("10000"); const assets=num(cash)+num(invest)+num(home)+num(car), liabilities=num(mort)+num(other), net=assets-liabilities;
 return <CalculatorShell title="Net Worth Calculator" description="Calculate net worth by comparing your assets with your debts and other liabilities."><div className="form-grid"><Field label="Cash & savings" value={cash} onChange={setCash} suffix="$"/><Field label="Investments" value={invest} onChange={setInvest} suffix="$"/><Field label="Home value" value={home} onChange={setHome} suffix="$"/><Field label="Vehicle value" value={car} onChange={setCar} suffix="$"/><Field label="Mortgage balance" value={mort} onChange={setMort} suffix="$"/><Field label="Other liabilities" value={other} onChange={setOther} suffix="$"/></div><Results><Result label="Net worth" value={money(net)} large/><Result label="Total assets" value={money(assets)}/><Result label="Total liabilities" value={money(liabilities)}/></Results></CalculatorShell>;
}

export function HourlyToSalaryCalculator(){
 const [rate,setRate]=useState("25"),[hours,setHours]=useState("40"),[weeks,setWeeks]=useState("52"); const annual=num(rate)*num(hours)*num(weeks);
 return <CalculatorShell title="Hourly to Salary Calculator" description="Convert an hourly wage into estimated weekly, monthly and annual gross pay."><div className="form-grid"><Field label="Hourly rate" value={rate} onChange={setRate} suffix="$/hr"/><Field label="Hours per week" value={hours} onChange={setHours}/><Field label="Weeks per year" value={weeks} onChange={setWeeks}/></div><Results><Result label="Annual salary" value={money(annual)} large/><Result label="Monthly" value={money(annual/12)}/><Result label="Weekly" value={money(annual/52)}/></Results></CalculatorShell>;
}

export function SalaryToHourlyCalculator(){
 const [salary,setSalary]=useState("65000"),[hours,setHours]=useState("40"),[weeks,setWeeks]=useState("52"); const hourly=num(salary)/(Math.max(1,num(hours))*Math.max(1,num(weeks)));
 return <CalculatorShell title="Salary to Hourly Calculator" description="Convert an annual salary into estimated hourly, weekly and monthly gross pay."><div className="form-grid"><Field label="Annual salary" value={salary} onChange={setSalary} suffix="$"/><Field label="Hours per week" value={hours} onChange={setHours}/><Field label="Weeks per year" value={weeks} onChange={setWeeks}/></div><Results><Result label="Hourly rate" value={money(hourly)} large/><Result label="Monthly" value={money(num(salary)/12)}/><Result label="Weekly" value={money(num(salary)/Math.max(1,num(weeks)))}/></Results></CalculatorShell>;
}

export function CommissionCalculator(){
 const [sales,setSales]=useState("5000"),[rate,setRate]=useState("7"); const commission=num(sales)*num(rate)/100;
 return <CalculatorShell title="Commission Calculator" description="Calculate sales commission from a sales amount and commission percentage."><div className="form-grid"><Field label="Sales amount" value={sales} onChange={setSales} suffix="$"/><Field label="Commission rate" value={rate} onChange={setRate} suffix="%"/></div><Results><Result label="Commission" value={money(commission)} large/><Result label="Sales + commission" value={money(num(sales)+commission)}/></Results></CalculatorShell>;
}

export function BonusCalculator(){
 const [salary,setSalary]=useState("70000"),[bonus,setBonus]=useState("10"); const amount=num(salary)*num(bonus)/100;
 return <CalculatorShell title="Bonus Calculator" description="Estimate a bonus amount from annual salary and a bonus percentage."><div className="form-grid"><Field label="Annual salary" value={salary} onChange={setSalary} suffix="$"/><Field label="Bonus percentage" value={bonus} onChange={setBonus} suffix="%"/></div><Results><Result label="Bonus amount" value={money(amount)} large/><Result label="Salary + bonus" value={money(num(salary)+amount)}/></Results><div className="calc-note">Gross bonus estimate before taxes, withholding and other payroll deductions.</div></CalculatorShell>;
}

export function PTOCalculator(){
 const [hours,setHours]=useState("80"),[days,setDays]=useState("10"),[used,setUsed]=useState("2"); const perDay=num(hours)/Math.max(1,num(days)), remaining=Math.max(0,num(days)-num(used));
 return <CalculatorShell title="PTO Calculator" description="Estimate remaining paid time off and convert PTO days into hours."><div className="form-grid"><Field label="PTO hours available" value={hours} onChange={setHours} suffix="hours"/><Field label="Workdays in PTO bank" value={days} onChange={setDays} suffix="days"/><Field label="Days already used" value={used} onChange={setUsed} suffix="days"/></div><Results><Result label="Remaining PTO days" value={remaining.toFixed(2)} large/><Result label="Remaining hours" value={(remaining*perDay).toFixed(2)}/><Result label="Hours per PTO day" value={perDay.toFixed(2)}/></Results><div className="calc-note">Company PTO policies vary. This tool assumes every PTO day represents the same number of work hours.</div></CalculatorShell>;
}

export function TimeZoneConverter(){
 const [time,setTime]=useState("12:00"),[from,setFrom]=useState("-5"),[to,setTo]=useState("-4"); const delta=num(to)-num(from); let h=Number(time.split(":")[0]||0)+delta,m=Number(time.split(":")[1]||0); h=((h%24)+24)%24; const out=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
 const zones=[["-8","Pacific (UTC−8)"],["-7","Mountain (UTC−7)"],["-6","Central (UTC−6)"],["-5","Eastern (UTC−5)"],["-4","Atlantic (UTC−4)"],["0","UTC"],["1","Central Europe (UTC+1)"],["5.5","India (UTC+5:30)"],["8","China/Singapore (UTC+8)"],["9","Japan (UTC+9)"]];
 return <CalculatorShell title="Time Zone Converter" description="Convert a clock time between common fixed UTC offsets for quick planning."><div className="form-grid"><Field label="Time" type="time" value={time} onChange={setTime}/><Field label="From time zone" value={from} onChange={setFrom} options={zones}/><Field label="To time zone" value={to} onChange={setTo} options={zones}/></div><Results><Result label="Converted time" value={out} large/><Result label="Time difference" value={`${delta>=0?"+":""}${delta} hours`}/></Results><div className="calc-note">This uses fixed UTC offsets and does not automatically account for daylight-saving changes. Check the local time zone for meetings where DST matters.</div></CalculatorShell>;
}

export function FractionCalculator(){
 const [a,setA]=useState("1"),[b,setB]=useState("2"),[c,setC]=useState("1"),[d,setD]=useState("3"),[op,setOp]=useState("add"); const A=num(a),B=num(b),C=num(c),D=num(d); let n=0,den=1; if(B&&D){if(op==="add"){n=A*D+C*B;den=B*D}else if(op==="subtract"){n=A*D-C*B;den=B*D}else if(op==="multiply"){n=A*C;den=B*D}else{n=A*D;den=B*C}} const g=gcd(n,den); if(g){n/=g;den/=g;} const val=den?n/den:0;
 return <CalculatorShell title="Fraction Calculator" description="Add, subtract, multiply or divide two fractions and simplify the result."><div className="form-grid"><Field label="First numerator" value={a} onChange={setA}/><Field label="First denominator" value={b} onChange={setB}/><Field label="Operation" value={op} onChange={setOp} options={[["add","Add +"],["subtract","Subtract −"],["multiply","Multiply ×"],["divide","Divide ÷"]]}/><Field label="Second numerator" value={c} onChange={setC}/><Field label="Second denominator" value={d} onChange={setD}/></div><Results><Result label="Simplified fraction" value={D&&B?(den?`${n}/${den}`:"0"):"—"} large/><Result label="Decimal" value={Number.isFinite(val)?val.toFixed(4):"—"}/></Results></CalculatorShell>;
}

export function RatioCalculator(){
 const [a,setA]=useState("2"),[b,setB]=useState("3"),[c,setC]=useState("10"); const g=gcd(a,b), aa=Math.trunc(num(a))/Math.max(1,g),bb=Math.trunc(num(b))/Math.max(1,g), needed=num(b)?num(a)*num(c)/num(b):0;
 return <CalculatorShell title="Ratio Calculator" description="Simplify a ratio and find a missing proportional value."><div className="form-grid"><Field label="First ratio value" value={a} onChange={setA}/><Field label="Second ratio value" value={b} onChange={setB}/><Field label="Known third value" value={c} onChange={setC}/></div><Results><Result label="Simplified ratio" value={`${aa}:${bb}`} large/><Result label="Equivalent fourth value" value={needed.toFixed(2)}/></Results></CalculatorShell>;
}

export function AverageCalculator(){
 const [values,setValues]=useState("10, 20, 30, 40, 50"); const arr=values.split(",").map(Number).filter(Number.isFinite), avg=arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0;
 return <CalculatorShell title="Average Calculator" description="Find the mean average of a list of numbers."><div className="form-grid"><Field label="Numbers (comma separated)" value={values} onChange={setValues} type="text" placeholder="10, 20, 30"/></div><Results><Result label="Average" value={avg.toFixed(2)} large/><Result label="Count" value={String(arr.length)}/><Result label="Sum" value={arr.reduce((a,b)=>a+b,0).toFixed(2)}/></Results></CalculatorShell>;
}

export function RandomNumberGenerator(){
 const [min,setMin]=useState("1"),[max,setMax]=useState("100"),[count,setCount]=useState("1"),[seed,setSeed]=useState(1); const values=useMemo(()=>{const lo=Math.ceil(num(min)),hi=Math.floor(num(max)); if(hi<lo)return []; let x=seed; const next=()=>{x=(x*1664525+1013904223)>>>0;return x/4294967296}; return Array.from({length:clamp(Math.round(num(count)||1),1,50)},()=>Math.floor(next()*(hi-lo+1))+lo)},[min,max,count,seed]);
 return <CalculatorShell title="Random Number Generator" description="Generate one or more random integers within a range directly in your browser."><div className="form-grid"><Field label="Minimum" value={min} onChange={setMin}/><Field label="Maximum" value={max} onChange={setMax}/><Field label="How many" value={count} onChange={setCount}/></div><Results><Result label="Random number(s)" value={values.join(", ")||"—"} large/></Results><button type="button" className="btn btn-primary" style={{marginTop:18}} onClick={()=>setSeed(Math.random()*1e9|0)}>Generate again</button></CalculatorShell>;
}

export function GCFCalculator(){ const [a,setA]=useState("48"),[b,setB]=useState("18"); const g=gcd(a,b); return <CalculatorShell title="GCF Calculator" description="Find the greatest common factor of two whole numbers."><div className="form-grid"><Field label="First number" value={a} onChange={setA}/><Field label="Second number" value={b} onChange={setB}/></div><Results><Result label="Greatest common factor" value={String(g)} large/></Results></CalculatorShell>; }
export function LCMCalculator(){ const [a,setA]=useState("12"),[b,setB]=useState("18"); const v=lcm(a,b); return <CalculatorShell title="LCM Calculator" description="Find the least common multiple of two whole numbers."><div className="form-grid"><Field label="First number" value={a} onChange={setA}/><Field label="Second number" value={b} onChange={setB}/></div><Results><Result label="Least common multiple" value={String(v)} large/></Results></CalculatorShell>; }

function evaluateArithmetic(input){
 const tokens=input.replace(/\s+/g,"").match(/(?:\d+(?:\.\d*)?|\.\d+|[()+\-*/^%])/g);
 if(!tokens || tokens.join("")!==input.replace(/\s+/g,"")) return null;
 const out=[], ops=[], prec={"+":1,"-":1,"*":2,"/":2,"%":2,"^":3};
 let expectValue=true;
 for(const t of tokens){
  if(/^[0-9.]+$/.test(t)){out.push(Number(t));expectValue=false;continue;}
  if(t==="-" && expectValue){out.push(0);}
  if(t==="("){ops.push(t);expectValue=true;continue;}
  if(t===")"){while(ops.length&&ops.at(-1)!=="(") out.push(ops.pop()); if(ops.pop()!=="(") return null; expectValue=false;continue;}
  if(!prec[t]) return null;
  while(ops.length&&ops.at(-1)!=="("&&((t!=="^"&&prec[ops.at(-1)]>=prec[t])||(t==="^"&&prec[ops.at(-1)]>prec[t]))) out.push(ops.pop());
  ops.push(t);expectValue=true;
 }
 while(ops.length){if(ops.at(-1)==="(")return null;out.push(ops.pop());}
 const st=[];for(const t of out){if(typeof t==="number"){st.push(t);continue;}const b=st.pop(),a=st.pop();if(a===undefined||b===undefined)return null;let v=t==="+"?a+b:t==="-"?a-b:t==="*"?a*b:t==="/"?(b===0?NaN:a/b):t==="%"?a%b:Math.pow(a,b);if(!Number.isFinite(v))return null;st.push(v);}return st.length===1&&Number.isFinite(st[0])?st[0]:null;
}
export function ScientificCalculator(){ const [expr,setExpr]=useState("2*(5+3)^2"); const v=evaluateArithmetic(expr), result=v===null?"—":v.toFixed(6).replace(/\.0+$/,'').replace(/(\.\d*?)0+$/,'$1'); return <CalculatorShell title="Scientific Calculator" description="Evaluate common arithmetic expressions with parentheses, powers and percentages."><div className="form-grid"><Field label="Expression" value={expr} onChange={setExpr} type="text" placeholder="2*(5+3)^2"/></div><Results><Result label="Result" value={result} large/></Results><div className="calc-note">Supports basic arithmetic, parentheses, powers (^), division, multiplication, addition, subtraction and remainder (%).</div></CalculatorShell>; }
export function DateDifferenceCalculator(){ const [start,setStart]=useState("2026-01-01"),[end,setEnd]=useState("2026-12-31"); const days=Math.abs(dateDays(start,end)); return <CalculatorShell title="Date Difference Calculator" description="Find the elapsed time between two calendar dates in days, weeks and approximate months."><div className="form-grid"><Field label="Start date" type="date" value={start} onChange={setStart}/><Field label="End date" type="date" value={end} onChange={setEnd}/></div><Results><Result label="Difference" value={`${days} days`} large/><Result label="Weeks" value={(days/7).toFixed(2)}/><Result label="Approx. months" value={(days/30.4375).toFixed(2)}/></Results></CalculatorShell>; }
export function DaysBetweenDatesCalculator(){ const [start,setStart]=useState("2026-01-01"),[end,setEnd]=useState("2026-12-31"); const days=Math.abs(dateDays(start,end))+1; return <CalculatorShell title="Days Between Dates Calculator" description="Count calendar days between two dates, including both endpoints for planning ranges."><div className="form-grid"><Field label="Start date" type="date" value={start} onChange={setStart}/><Field label="End date" type="date" value={end} onChange={setEnd}/></div><Results><Result label="Days including both dates" value={`${days} days`} large/><Result label="Weeks" value={(days/7).toFixed(2)}/></Results><div className="calc-note">This version counts both the start and end dates. For elapsed time, use Date Difference Calculator.</div></CalculatorShell>; }

export function GPACalculator(){ const [a,setA]=useState("4"),[b,setB]=useState("3"),[c,setC]=useState("3.7"),[d,setD]=useState("2.7"); const arr=[num(a),num(b),num(c),num(d)]; const g=arr.reduce((x,y)=>x+y,0)/arr.length; return <CalculatorShell title="GPA Calculator" description="Calculate a simple grade point average from entered course GPAs."><div className="form-grid"><Field label="Course 1 GPA" value={a} onChange={setA}/><Field label="Course 2 GPA" value={b} onChange={setB}/><Field label="Course 3 GPA" value={c} onChange={setC}/><Field label="Course 4 GPA" value={d} onChange={setD}/></div><Results><Result label="Average GPA" value={g.toFixed(2)} large/></Results><div className="calc-note">This is an unweighted average of the entered course GPAs. Schools may use credit hours, weighted grades or different grading scales.</div></CalculatorShell>; }
export function GradeCalculator(){ const [earned,setEarned]=useState("85"),[possible,setPossible]=useState("100"); const pct=num(possible)?num(earned)/num(possible)*100:0; const letter=pct>=90?'A':pct>=80?'B':pct>=70?'C':pct>=60?'D':'F'; return <CalculatorShell title="Grade Calculator" description="Calculate a percentage grade and a simple letter-grade estimate."><div className="form-grid"><Field label="Points earned" value={earned} onChange={setEarned}/><Field label="Points possible" value={possible} onChange={setPossible}/></div><Results><Result label="Percentage" value={`${pct.toFixed(2)}%`} large/><Result label="Letter estimate" value={letter}/></Results><div className="calc-note">Letter ranges shown are a common A/B/C/D/F scale and may differ from your school or instructor.</div></CalculatorShell>; }
