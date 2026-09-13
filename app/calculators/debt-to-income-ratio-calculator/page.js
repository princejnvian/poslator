import { DebtToIncomeCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Debt-to-Income Ratio Calculator – Free Online Calculator",
  description: "Calculate your monthly debt-to-income ratio from gross income and recurring debt payments.",
  alternates: { canonical: "/calculators/debt-to-income-ratio-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><DebtToIncomeCalculator /><CalculatorGuide {...calculatorGuides["debt-to-income-ratio-calculator"]} /></div></section>;
}
