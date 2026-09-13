import { LCMCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "LCM Calculator – Free Online Calculator",
  description: "Find the least common multiple of two whole numbers.",
  alternates: { canonical: "/calculators/lcm-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><LCMCalculator /><CalculatorGuide {...calculatorGuides["lcm-calculator"]} /></div></section>;
}
