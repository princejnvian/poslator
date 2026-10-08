"use client";

import { useEffect, useState } from "react";
import CalculatorShell from "@/components/CalculatorShell";

function tokenize(input) {
  const cleaned = input.replace(/\s+/g, "");
  if (!cleaned) return [];
  const tokens = cleaned.match(/(?:\d+(?:\.\d*)?|\.\d+|[()+\-*/^%])/g);
  if (!tokens || tokens.join("") !== cleaned) return null;
  return tokens;
}

function evaluate(input) {
  const tokens = tokenize(input);
  if (!tokens) return null;
  if (!tokens.length) return 0;

  const output = [];
  const operators = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "%": 2, "^": 3 };
  let expectValue = true;

  for (const token of tokens) {
    if (/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) {
      output.push(Number(token));
      expectValue = false;
      continue;
    }

    if (token === "-" && expectValue) {
      output.push(0);
      operators.push("-");
      expectValue = true;
      continue;
    }

    if (token === "(") {
      operators.push(token);
      expectValue = true;
      continue;
    }

    if (token === ")") {
      while (operators.length && operators.at(-1) !== "(") output.push(operators.pop());
      if (operators.pop() !== "(") return null;
      expectValue = false;
      continue;
    }

    if (!precedence[token] || expectValue) return null;
    while (
      operators.length &&
      operators.at(-1) !== "(" &&
      ((token !== "^" && precedence[operators.at(-1)] >= precedence[token]) ||
        (token === "^" && precedence[operators.at(-1)] > precedence[token]))
    ) {
      output.push(operators.pop());
    }
    operators.push(token);
    expectValue = true;
  }

  if (expectValue) return null;
  while (operators.length) {
    if (operators.at(-1) === "(") return null;
    output.push(operators.pop());
  }

  const stack = [];
  for (const token of output) {
    if (typeof token === "number") {
      stack.push(token);
      continue;
    }
    const b = stack.pop();
    const a = stack.pop();
    if (a === undefined || b === undefined) return null;
    let value;
    if (token === "+") value = a + b;
    else if (token === "-") value = a - b;
    else if (token === "*") value = a * b;
    else if (token === "/") value = b === 0 ? NaN : a / b;
    else if (token === "%") value = b === 0 ? NaN : a % b;
    else value = Math.pow(a, b);
    if (!Number.isFinite(value)) return null;
    stack.push(value);
  }
  return stack.length === 1 && Number.isFinite(stack[0]) ? stack[0] : null;
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

  function toggleSign() {
    setError(false);
    const match = expression.match(/(?:^|[+\-*/^(])(-?(?:\d+(?:\.\d*)?|\.\d+))$/);
    if (!match) return;
    const number = match[1];
    const replacement = number.startsWith("-") ? number.slice(1) : `-${number}`;
    const next = `${expression.slice(0, expression.length - number.length)}${replacement}`;
    setExpression(next);
    setDisplay(replacement.startsWith("-") ? `−${formatNumber(Number(replacement.slice(1)))}` : formatNumber(Number(replacement)));
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
    { label: "±", action: toggleSign, type: "utility", aria: "Toggle sign" },
    { label: "%", action: percent, type: "utility", aria: "Percent" },
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
    { label: "0", action: () => append("0"), type: "number", wide: true },
    { label: ".", action: () => append("."), type: "number" },
    { label: "=", action: calculate, type: "equals", aria: "Equals" },
  ];

  return (
    <CalculatorShell title="Basic Calculator" description="A fast, phone-style calculator for everyday arithmetic, percentages and quick calculations.">
      <div className="phone-calculator" onKeyDown={handleKeyDown} tabIndex={0} aria-label="Basic calculator">
        <div className="phone-display-wrap">
          <div className="phone-expression" aria-hidden="true">{expression || ""}</div>
          <div className="phone-display result result-large" aria-live="polite">
            <span>Result</span>
            <strong className={error ? "phone-error" : ""}>{display}</strong>
          </div>
        </div>
        <div className="phone-keypad">
          {buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              className={`phone-key phone-key-${button.type}${button.wide ? " phone-key-wide" : ""}`}
              onClick={button.action}
              aria-label={button.aria || button.label}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="phone-hint">Keyboard supported · Press Enter for = · Esc for AC</div>
      </div>
    </CalculatorShell>
  );
}
