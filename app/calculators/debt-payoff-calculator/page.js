import { DebtPayoffCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Debt Payoff Calculator – Free Online Calculator",
  description: "Estimate how long it may take to pay off a debt balance with a fixed monthly payment.",
  alternates: { canonical: "/calculators/debt-payoff-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><DebtPayoffCalculator /><CalculatorGuide {...calculatorGuides["debt-payoff-calculator"]} /></div></section>;
}
