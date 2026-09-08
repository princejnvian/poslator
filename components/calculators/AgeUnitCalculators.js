"use client";
import { useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

function daysBetween(a,b) {
  const start=new Date(a+"T00:00:00"), end=new Date(b+"T00:00:00");
  return Math.max(0, Math.round((end-start)/86400000));
}
export function AgeCalculator() {
  const [birth,setBirth]=useState("2000-01-01"),[asOf,setAsOf]=useState(new Date().toISOString().slice(0,10));
  const d1=new Date(birth+"T00:00:00"),d2=new Date(asOf+"T00:00:00");
  let years=d2.getFullYear()-d1.getFullYear(), months=d2.getMonth()-d1.getMonth(), days=d2.getDate()-d1.getDate();
  if(days<0){months--;days+=new Date(d2.getFullYear(),d2.getMonth(),0).getDate();}
  if(months<0){years--;months+=12;}
  const total=daysBetween(birth,asOf);
  return <CalculatorShell title="Age Calculator" description="Calculate your exact age in years, months, days and total days.">
    <div className="form-grid"><Field label="Date of birth" type="date" value={birth} onChange={setBirth}/><Field label="Age on" type="date" value={asOf} onChange={setAsOf}/></div>
    <Results><Result label="Exact age" value={`${Math.max(0,years)} years, ${Math.max(0,months)} months, ${Math.max(0,days)} days`} large/><Result label="Total days" value={String(total)}/></Results>
  </CalculatorShell>;
}

const factors={inches:{cm:2.54,feet:1/12},feet:{meters:0.3048,inches:12},miles:{kilometers:1.609344},pounds:{kilograms:0.45359237},kilograms:{pounds:2.20462262},cups:{gallons:1/16},gallons:{cups:16}};
export function UnitConverter() {
  const [category,setCategory]=useState("length"),[value,setValue]=useState("1"),[from,setFrom]=useState("miles"),[to,setTo]=useState("kilometers");
  const sets={
    length:[["miles","Miles"],["kilometers","Kilometers"],["feet","Feet"],["meters","Meters"],["inches","Inches"],["centimeters","Centimeters"]],
    weight:[["pounds","Pounds"],["kilograms","Kilograms"]],
    temperature:[["fahrenheit","Fahrenheit"],["celsius","Celsius"]],
    volume:[["cups","Cups"],["gallons","Gallons"]]
  };
  const opts=sets[category];
  const validFrom=opts.some(x=>x[0]===from)?from:opts[0][0], validTo=opts.some(x=>x[0]===to)?to:opts[1]?.[0]||opts[0][0];
  function convert() {
    const v=Number(value)||0;
    if(validFrom===validTo) return v;
    if(validFrom==="fahrenheit"&&validTo==="celsius") return (v-32)*5/9;
    if(validFrom==="celsius"&&validTo==="fahrenheit") return v*9/5+32;
    const direct=factors[validFrom]?.[validTo];
    if(direct) return v*direct;
    const reverse=factors[validTo]?.[validFrom];
    if(reverse) return v/reverse;
    const base={
      miles:v*1.609344,kilometers:v,feet:v*0.3048,meters:v,inches:v*0.0254,centimeters:v/100,
      pounds:v*0.45359237,kilograms:v,cups:v/16,gallons:v
    };
    if(category==="length"){
      const meters=base[validFrom] ?? v;
      const toMeters={miles:1609.344,kilometers:1,feet:0.3048,meters:1,inches:0.0254,centimeters:0.01};
      return meters/(toMeters[validTo]||1);
    }
    if(category==="weight"){
      const kg=base[validFrom] ?? v;
      return validTo==="pounds"?kg*2.20462262:kg;
    }
    if(category==="volume"){
      const gallons=validFrom==="cups"?v/16:v;
      return validTo==="cups"?gallons*16:gallons;
    }
    return v;
  }
  return <CalculatorShell title="Unit Converter" description="Convert common US and metric units for length, weight, temperature and volume.">
    <div className="form-grid"><Field label="Category" value={category} onChange={v=>{setCategory(v);}} options={[["length","Length"],["weight","Weight"],["temperature","Temperature"],["volume","Volume"]]}/><Field label="Value" value={value} onChange={setValue}/><Field label="From" value={validFrom} onChange={setFrom} options={opts}/><Field label="To" value={validTo} onChange={setTo} options={opts}/></div>
    <Results><Result label="Converted value" value={convert().toFixed(4).replace(/\.?0+$/,"")} large/></Results>
    <div className="calc-note">For production, add more unit pairs and validate every conversion with tests before launch.</div>
  </CalculatorShell>;
}
