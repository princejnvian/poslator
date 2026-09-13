import { FractionCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Fraction Calculator – Free Online Calculator",
  description: "Add, subtract, multiply or divide two fractions and simplify the result.",
  alternates: { canonical: "/calculators/fraction-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><FractionCalculator /><CalculatorGuide {...calculatorGuides["fraction-calculator"]} /></div></section>;
}
