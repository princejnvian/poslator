import { AverageCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Average Calculator – Free Online Calculator",
  description: "Find the mean average of a list of numbers.",
  alternates: { canonical: "/calculators/average-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><AverageCalculator /><CalculatorGuide {...calculatorGuides["average-calculator"]} /></div></section>;
}
