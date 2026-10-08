"use client";

import { useEffect, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";

function evaluate(input) {
  const source = input.replace(/\s+/g, "");
  if (!source) return 0;
  const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+|[()+\-*/^%])/g);
  if (!tokens || tokens.join("") !== source) return null;

  let index = 0;
  const peek = () => tokens[index];
  const take = () => tokens[index++];

  function expression() {
    let value = term();
    while (peek() === "+" || peek() === "-") {
      const op = take();
      const rhs = term();
      if (rhs === null) return null;
      value = op === "+" ? value + rhs : value - rhs;
    }
    return value;
  }

  function term() {
    let value = power();
    while (peek() === "*" || peek() === "/" || peek() === "%") {
      const op = take();
      const rhs = power();
      if (rhs === null) return null;
      if ((op === "/" || op === "%") && rhs === 0) return null;
      value = op === "*" ? value * rhs : op === "/" ? value / rhs : value % rhs;
    }
    return value;
  }

  function power() {
    let value = unary();
    if (peek() === "^") {
      take();
      const rhs = power();
      if (rhs === null) return null;
      value = Math.pow(value, rhs);
    }
    return value;
  }

  function unary() {
    if (peek() === "+") { take(); return unary(); }
    if (peek() === "-") { take(); return -unary(); }
    return primary();
  }

  function primary() {
    const token = peek();
    if (!token) return null;
    if (token === "(") {
      take();
      const value = expression();
      if (take() !== ")") return null;
      return value;
    }
    if (/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) {
      take();
      return Number(token);
    }
    return null;
  }

  const value = expression();
  return index === tokens.length && Number.isFinite(value) ? value : null;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "Error";
  const rounded = Math.abs(value) < 1e15 ? Number(value.toPrecision(12)) : value;
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 10 }).format(rounded);
}

function rawNumber(value) {
  const text = String(value);
  return text.includes("e") ? Number(text).toExponential(8).replace(/0+e/, "e") : text;
}

export function BasicCalculator() {
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const [justEvaluated, setJustEvaluated] = useState(false);
  const [error, setError] = useState(false);

  function clear() {
    setExpression("");
    setDisplay("0");
    setJustEvaluated(false);
    setError(false);
  }

  useEffect(() => {
    const onClear = () => clear();
    window.addEventListener("poslator:clear-all", onClear);
    return () => window.removeEventListener("poslator:clear-all", onClear);
  }, []);

  function append(value) {
    setError(false);
    if (justEvaluated && /[0-9.]/.test(value)) {
      setExpression(value === "." ? "0." : value);
      setDisplay(value === "." ? "0." : value);
      setJustEvaluated(false);
      return;
    }

    if (/[0-9.]/.test(value)) {
      const tail = expression.match(/(?:\d+(?:\.\d*)?|\.\d+)$/)?.[0] || "";
      if (value === "." && tail.includes(".")) return;
      if (value === "." && (!tail || /[+\-*/^(]$/.test(expression))) {
        const next = `${expression}0.`;
        setExpression(next);
        setDisplay("0.");
        return;
      }
    }

    const next = `${expression}${value}`;
    setExpression(next);
    const tail = next.match(/(?:\d+(?:\.\d*)?|\.\d+)$/)?.[0];
    setDisplay(tail ? formatNumber(Number(tail)) : value);
    setJustEvaluated(false);
  }

  function operator(op) {
    setError(false);
    if (!expression) {
      if (op === "-") {
        setExpression("-");
        setDisplay("−");
      }
      return;
    }

    let next = expression;
    if (/[+\-*/^]$/.test(next)) next = `${next.slice(0, -1)}${op}`;
    else next += op;
    setExpression(next);
    setDisplay(op === "+" ? "+" : op === "-" ? "−" : op === "*" ? "×" : "÷");
    setJustEvaluated(false);
  }

  function backspace() {
    setError(false);
    if (justEvaluated) return clear();
    const next = expression.slice(0, -1);
    setExpression(next);
    const tail = next.match(/(?:\d+(?:\.\d*)?|\.\d+)$/)?.[0];
    setDisplay(tail ? formatNumber(Number(tail)) : next ? next.slice(-1) : "0");
  }

  function percent() {
    setError(false);
    const match = expression.match(/(?:\d+(?:\.\d*)?|\.\d+)$/);
    if (!match) return;
    const number = Number(match[0]);
    if (!Number.isFinite(number)) return;
    const before = expression.slice(0, -match[0].length);
    const operatorMatch = before.match(/([+\-*/])$/);
    let replacement = number / 100;

    if (operatorMatch && (operatorMatch[1] === "+" || operatorMatch[1] === "-")) {
      const base = evaluate(before.slice(0, -1));
      if (base !== null) replacement = (base * number) / 100;
    }

    const next = `${before}${rawNumber(replacement)}`;
    setExpression(next);
    setDisplay(formatNumber(replacement));
  }

  function calculate() {
    if (!expression) return;
    const value = evaluate(expression);
    if (value === null) {
      setError(true);
      setDisplay("Error");
      return;
    }
    setDisplay(formatNumber(value));
    setExpression(rawNumber(value));
    setJustEvaluated(true);
  }

  function handleKeyDown(event) {
    if (event.key >= "0" && event.key <= "9") append(event.key);
    else if (event.key === ".") append(".");
    else if (["+", "-", "*", "/", "^"].includes(event.key)) operator(event.key);
    else if (event.key === "(") append("(");
    else if (event.key === ")") append(")");
    else if (event.key === "%") percent();
    else if (event.key === "Enter" || event.key === "=") calculate();
    else if (event.key === "Backspace") backspace();
    else if (event.key === "Escape" || event.key.toLowerCase() === "c") clear();
    else return;
    event.preventDefault();
  }

  const buttons = [
    { label: "AC", action: clear, type: "utility" },
    { label: "⌫", action: backspace, type: "utility", aria: "Backspace" },
    { label: "%", action: percent, type: "utility", aria: "Percent" },
    { label: "00", action: () => append("00"), type: "utility", aria: "Double zero" },
    { label: "7", action: () => append("7"), type: "number" },
    { label: "8", action: () => append("8"), type: "number" },
    { label: "9", action: () => append("9"), type: "number" },
    { label: "÷", action: () => operator("/"), type: "operator", aria: "Divide" },
    { label: "4", action: () => append("4"), type: "number" },
    { label: "5", action: () => append("5"), type: "number" },
    { label: "6", action: () => append("6"), type: "number" },
    { label: "×", action: () => operator("*"), type: "operator", aria: "Multiply" },
    { label: "1", action: () => append("1"), type: "number" },
    { label: "2", action: () => append("2"), type: "number" },
    { label: "3", action: () => append("3"), type: "number" },
    { label: "−", action: () => operator("-"), type: "operator", aria: "Subtract" },
    { label: "0", action: () => append("0"), type: "number" },
    { label: ".", action: () => append("."), type: "number" },
    { label: "+", action: () => operator("+"), type: "operator", aria: "Add" },
    { label: "=", action: calculate, type: "equals", aria: "Equals" },
  ];

  return (
    <CalculatorShell title="Basic Calculator" description="A fast, phone-style calculator for everyday arithmetic, percentages and quick calculations.">
      <div className="phone-calculator" onKeyDown={handleKeyDown} tabIndex={0} aria-label="Basic calculator">
        <div className="phone-display-wrap">
          <div className="phone-expression" aria-hidden="true">{expression || ""}</div>
          <div className="phone-display result" aria-live="polite">
            <span>Result</span>
            <strong className={error ? "phone-error" : ""}>{display}</strong>
          </div>
        </div>
        <div className="phone-keypad">
          {buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              className={`phone-key phone-key-${button.type}`}
              onClick={button.action}
              aria-label={button.aria || button.label}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="phone-hint">Keyboard supported · Enter = · Esc = AC · Backspace = delete</div>
      </div>
    </CalculatorShell>
  );
}
