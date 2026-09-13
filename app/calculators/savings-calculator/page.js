import { SavingsCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Savings Calculator – Free Online Calculator",
  description: "Estimate how savings and regular deposits can grow with interest over time.",
  alternates: { canonical: "/calculators/savings-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><SavingsCalculator /><CalculatorGuide {...calculatorGuides["savings-calculator"]} /></div></section>;
}
