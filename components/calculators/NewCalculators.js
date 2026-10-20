"use client";
import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";
const usd = n => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(Number.isFinite(n) ? n : 0);
const num = v => Math.max(0, Number(v) || 0);

export function InflationCalculator() {
 const [amount,setAmount]=useState("1000"),[rate,setRate]=useState("3"),[years,setYears]=useState("10");
 const a=num(amount),r=Math.min(100,num(rate))/100,y=Math.min(100,num(years));
 const future=a*Math.pow(1+r,y), purchasing=a/Math.pow(1+r,y);
 return <CalculatorShell title="Inflation Calculator" description="Estimate how inflation changes the future cost of goods and the purchasing power of money."><div className="form-grid"><Field label="Today's amount" value={amount} onChange={setAmount} suffix="$"/><Field label="Annual inflation rate" value={rate} onChange={setRate} suffix="%"/><Field label="Years" value={years} onChange={setYears} suffix="years"/></div><Results><Result label="Equivalent future cost" value={usd(future)} large/><Result label="Extra amount needed" value={usd(future-a)}/><Result label="Today's $ buying power then" value={usd(purchasing)}/></Results><p className="calc-note">This is a scenario estimate using a constant annual inflation rate, not a forecast. Actual inflation varies over time.</p></CalculatorShell>;
}

export function RentVsBuyCalculator() {
 const [rent,setRent]=useState("1800"),[home,setHome]=useState("350000"),[down,setDown]=useState("70000"),[rate,setRate]=useState("6.5"),[years,setYears]=useState("7"),[growth,setGrowth]=useState("3"),[tax,setTax]=useState("350");
 const r=num(rent),price=num(home),dp=Math.min(price,num(down)),apr=Math.min(100,num(rate)),y=Math.min(50,Math.max(1,num(years))),g=Math.min(100,num(growth))/100,monthly=apr/1200,n=y*12,principal=price-dp;
 const mortgage=monthly===0?(n?principal/n:0):monthly===0?0:principal*monthly/(1-Math.pow(1+monthly,-n||-1));
 const actualMonthly=apr===0?principal/n:principal*(apr/1200)/(1-Math.pow(1+apr/1200,-360));
 const totalRent=r*12*y, mortgagePaid=actualMonthly*12*y, equity=price*Math.pow(1+g,y)-Math.max(0,principal*(Math.pow(1+apr/1200,360)-Math.pow(1+apr/1200,n))/(Math.pow(1+apr/1200,360)-1));
 const annualCosts=num(tax)*12*y; const buyCost=dp+mortgagePaid+annualCosts-Math.max(0,equity); const difference=totalRent-buyCost;
 return <CalculatorShell title="Rent vs. Buy Calculator" description="Compare a simplified rent cost with estimated homeownership costs over your planned time horizon."><div className="form-grid"><Field label="Monthly rent" value={rent} onChange={setRent} suffix="$"/><Field label="Home purchase price" value={home} onChange={setHome} suffix="$"/><Field label="Down payment" value={down} onChange={setDown} suffix="$"/><Field label="Mortgage interest rate" value={rate} onChange={setRate} suffix="%"/><Field label="Years in home" value={years} onChange={setYears} suffix="years"/><Field label="Annual home price growth" value={growth} onChange={setGrowth} suffix="%"/><Field label="Monthly property tax + insurance" value={tax} onChange={setTax} suffix="$"/></div><Results><Result label="Rent paid over period" value={usd(totalRent)} large/><Result label="Estimated net buying cost" value={usd(buyCost)}/><Result label="Rent advantage (positive = rent costs more)" value={usd(difference)}/></Results><p className="calc-note">Simplified comparison only. It excludes maintenance, closing costs, rent increases, tax effects, selling costs and investment returns on the down payment. Use local estimates before making a decision.</p></CalculatorShell>;
}

export function FuelCostCalculator() {
 const [distance,setDistance]=useState("300"),[efficiency,setEfficiency]=useState("28"),[price,setPrice]=useState("3.50"),[unit,setUnit]=useState("miles");
 const d=num(distance),mpg=Math.max(.1,num(efficiency)),p=num(price),liters=unit==="miles"?0:d*mpg/100,gallons=unit==="miles"?d/mpg:liters/3.78541,cost=gallons*p;
 return <CalculatorShell title="Fuel Cost Calculator" description="Estimate fuel needed and fuel cost for a road trip using distance, vehicle efficiency and fuel price."><div className="form-grid"><Field label="Trip distance" value={distance} onChange={setDistance} suffix={unit}/><Field label="Distance unit" value={unit} onChange={setUnit} type="text" options={[["miles","Miles"],["km","Kilometers"]]}/><Field label={unit==="miles"?"Vehicle efficiency (MPG)":"Fuel use (liters / 100 km)"} value={efficiency} onChange={setEfficiency} suffix={unit==="miles"?"MPG":"L/100 km"}/><Field label="Fuel price per gallon" value={price} onChange={setPrice} suffix="$"/></div><Results><Result label="Estimated fuel cost" value={usd(cost)} large/><Result label="Fuel needed" value={unit==="miles"?`${gallons.toFixed(2)} gallons`:`${(d*mpg/100).toFixed(2)} liters`}/><Result label="Cost per distance unit" value={usd((unit==="miles"?cost:(d*mpg/100)*p/3.78541)/(d||1))}/></Results><p className="calc-note">For kilometers, enter fuel consumption in L/100 km and fuel price per US gallon; the estimate converts liters to gallons for pricing. Real mileage changes with traffic, weather and driving style.</p></CalculatorShell>;
}

export function CreditCardPayoffCalculator() {
 const [balance,setBalance]=useState("5000"),[rate,setRate]=useState("24.99"),[payment,setPayment]=useState("200");
 const b=num(balance),r=Math.min(100,num(rate))/1200,p=num(payment); let remaining=b,months=0,interest=0;
 if(b>0&&p>0){while(remaining>0&&months<1200){const i=remaining*r;if(p<=i){months=Infinity;break;}interest+=i;remaining-=p-i;months++;}}
 const total=Number.isFinite(months)?b+interest:0;
 return <CalculatorShell title="Credit Card Payoff Calculator" description="Estimate how long it takes to pay off a credit card and how much interest your monthly payment may cost."><div className="form-grid"><Field label="Current card balance" value={balance} onChange={setBalance} suffix="$"/><Field label="Annual percentage rate (APR)" value={rate} onChange={setRate} suffix="%"/><Field label="Monthly payment" value={payment} onChange={setPayment} suffix="$"/></div><Results><Result label="Estimated payoff time" value={Number.isFinite(months)?`${Math.floor(months/12)} yr ${months%12} mo`:b===0?"Already paid": "Payment too low"} large/><Result label="Estimated interest" value={Number.isFinite(months)?usd(interest):"—"}/><Result label="Total paid" value={Number.isFinite(months)?usd(total):"—"}/></Results><p className="calc-note">Assumes no new purchases, fees or missed payments and a constant APR. Actual card issuers may calculate interest daily and use different minimum-payment rules.</p></CalculatorShell>;
}

export function BodyFatCalculator() {
 const [gender,setGender]=useState("male"),[height,setHeight]=useState("70"),[neck,setNeck]=useState("15"),[waist,setWaist]=useState("34"),[hip,setHip]=useState("38");
 const h=num(height),n=num(neck),w=num(waist),hp=num(hip); let bf=NaN;
 if(h>n&&w>n){if(gender==="male")bf=86.010*Math.log10(w-n)-70.041*Math.log10(h)+36.76;else if(w+hp>n)bf=163.205*Math.log10(w+hp-n)-97.684*Math.log10(h)-78.387;}
 return <CalculatorShell title="Body Fat Calculator" description="Get a rough body-fat percentage estimate using the US Navy circumference method." ><div className="form-grid"><Field label="Formula" value={gender} onChange={setGender} type="text" options={[["male","Male"],["female","Female"]]}/><Field label="Height (inches)" value={height} onChange={setHeight} suffix="in"/><Field label="Neck circumference" value={neck} onChange={setNeck} suffix="in"/><Field label="Waist circumference" value={waist} onChange={setWaist} suffix="in"/>{gender==="female"&&<Field label="Hip circumference" value={hip} onChange={setHip} suffix="in"/>}</div><Results><Result label="Estimated body fat" value={Number.isFinite(bf)&&bf>0?`${bf.toFixed(1)}%`:"Enter valid measurements"} large/></Results><p className="calc-note">This circumference-based formula is a rough estimate, not a medical measurement. Measure consistently and consult a qualified professional for health decisions.</p></CalculatorShell>;
}
