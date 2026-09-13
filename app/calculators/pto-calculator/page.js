import { PTOCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "PTO Calculator – Free Online Calculator",
  description: "Estimate remaining paid time off and convert PTO days into hours.",
  alternates: { canonical: "/calculators/pto-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><PTOCalculator /><CalculatorGuide {...calculatorGuides["pto-calculator"]} /></div></section>;
}
