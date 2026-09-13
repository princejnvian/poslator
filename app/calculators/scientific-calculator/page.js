import { ScientificCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Scientific Calculator – Free Online Calculator",
  description: "Evaluate common arithmetic expressions with parentheses, powers and basic operators.",
  alternates: { canonical: "/calculators/scientific-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><ScientificCalculator /><CalculatorGuide {...calculatorGuides["scientific-calculator"]} /></div></section>;
}
