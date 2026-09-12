"use client";
import { useEffect, useMemo, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";
import { Field, Result, Results } from "@/components/Field";

function toMinutes(time) {
  if (!time) return 0;
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}
function diffMinutes(start, end) {
  let a = toMinutes(start), b = toMinutes(end);
  if (b < a) b += 1440;
  return b - a;
}
function money(n) { return Number.isFinite(n) ? `$${n.toFixed(2)}` : "$0.00"; }
function hm(mins) { return `${Math.floor(mins / 60)}h ${mins % 60}m`; }

export function HoursWorkedCalculator() {
  const [start, setStart] = useState("08:30");
  const [end, setEnd] = useState("17:00");
  const [breaks, setBreaks] = useState("30");
  const minutes = Math.max(0, diffMinutes(start, end) - Number(breaks || 0));
  return <CalculatorShell title="Hours Worked Calculator" description="Calculate exact hours worked between a start and end time, minus unpaid breaks.">
    <div className="form-grid">
      <Field label="Start time" type="time" value={start} onChange={setStart}/>
      <Field label="End time" type="time" value={end} onChange={setEnd}/>
      <Field label="Unpaid break" value={breaks} onChange={setBreaks} suffix="minutes"/>
    </div>
    <Results><Result label="Hours worked" value={hm(minutes)} large/><Result label="Decimal hours" value={(minutes/60).toFixed(2)}/></Results>
    <div className="explain"><h3>Example</h3><p>8:30 AM to 5:00 PM with a 30-minute unpaid break equals 8 hours worked.</p></div>
  </CalculatorShell>;
}

export function TimeCardCalculator() {
  const [rate, setRate] = useState("20");
  const [rows, setRows] = useState([
    ["Mon","08:30","17:00","30"],["Tue","08:30","17:00","30"],["Wed","08:30","17:00","30"],["Thu","08:30","17:00","30"],["Fri","08:30","17:00","30"]
  ]);
  const update = (i, j, v) => setRows(r => r.map((row, idx) => idx === i ? row.map((x,k)=>k===j?v:x) : row));
  useEffect(() => {
    const clear = () => setRows(r => r.map(row => [row[0], "", "", ""]));
    window.addEventListener("poslator:clear-all", clear);
    return () => window.removeEventListener("poslator:clear-all", clear);
  }, []);
  const totals = useMemo(() => rows.reduce((s,r)=>s+Math.max(0,diffMinutes(r[1],r[2])-Number(r[3]||0)),0), [rows]);
  const regular = Math.min(totals, 40*60);
  const ot = Math.max(0, totals-40*60);
  const gross = regular/60*Number(rate||0) + ot/60*Number(rate||0)*1.5;
  return <CalculatorShell title="Time Card Calculator" description="Track a work week, subtract breaks and estimate regular and overtime pay.">
    <div className="toolbar"><Field label="Hourly rate" value={rate} onChange={setRate} suffix="$/hr"/></div>
    <div className="table-wrap"><table className="time-table"><thead><tr><th>Day</th><th>Start</th><th>End</th><th>Break</th><th>Hours</th></tr></thead>
    <tbody>{rows.map((r,i)=><tr key={r[0]}><td>{r[0]}</td><td><input type="time" inputMode="none" enterKeyHint="next" value={r[1]} onChange={e=>update(i,1,e.target.value)}/></td><td><input type="time" inputMode="none" enterKeyHint="next" value={r[2]} onChange={e=>update(i,2,e.target.value)}/></td><td><input type="number" inputMode="decimal" enterKeyHint="next" value={r[3]} onChange={e=>update(i,3,e.target.value)}/></td><td>{hm(Math.max(0,diffMinutes(r[1],r[2])-Number(r[3]||0)))}</td></tr>)}</tbody></table></div>
    <Results><Result label="Regular hours" value={hm(regular)}/><Result label="Overtime hours" value={hm(ot)}/><Result label="Estimated gross pay" value={money(gross)} large/></Results>
    <div className="calc-note">Default overtime is estimated at 1.5× after 40 hours for the week. Employer/state rules can differ.</div>
  </CalculatorShell>;
}

export function OvertimeCalculator() {
  const [hours,setHours]=useState("46"), [rate,setRate]=useState("22"), [threshold,setThreshold]=useState("40"), [mult,setMult]=useState("1.5");
  const h=Number(hours)||0, r=Number(rate)||0, t=Number(threshold)||0, m=Number(mult)||0;
  const regular=Math.min(h,t), ot=Math.max(0,h-t), gross=regular*r+ot*r*m;
  return <CalculatorShell title="Overtime Calculator" description="Estimate regular pay, overtime pay and total gross pay from your hours and hourly rate.">
    <div className="form-grid"><Field label="Total hours" value={hours} onChange={setHours} suffix="hours"/><Field label="Hourly rate" value={rate} onChange={setRate} suffix="$/hr"/><Field label="Overtime after" value={threshold} onChange={setThreshold} suffix="hours"/><Field label="OT multiplier" value={mult} onChange={setMult} suffix="×"/></div>
    <Results><Result label="Regular pay" value={money(regular*r)}/><Result label="Overtime pay" value={money(ot*r*m)}/><Result label="Total gross pay" value={money(gross)} large/></Results>
    <div className="explain"><h3>How it works</h3><p>Hours up to the threshold use your normal rate. Hours above it use the overtime multiplier.</p></div>
  </CalculatorShell>;
}

export function TimeCalculator() {
  const [h1,setH1]=useState("2"),[m1,setM1]=useState("45"),[h2,setH2]=useState("1"),[m2,setM2]=useState("30"),[op,setOp]=useState("add");
  const a=Number(h1)*60+Number(m1), b=Number(h2)*60+Number(m2), total=op==="add"?a+b:Math.max(0,a-b);
  return <CalculatorShell title="Time Calculator" description="Add or subtract hours and minutes quickly.">
    <div className="form-grid"><Field label="First hours" value={h1} onChange={setH1}/><Field label="First minutes" value={m1} onChange={setM1}/><Field label="Operation" value={op} onChange={setOp} options={[["add","Add +"],["subtract","Subtract −"]]}/><Field label="Second hours" value={h2} onChange={setH2}/><Field label="Second minutes" value={m2} onChange={setM2}/></div>
    <Results><Result label="Result" value={hm(total)} large/><Result label="Decimal hours" value={(total/60).toFixed(2)}/></Results>
  </CalculatorShell>;
}
