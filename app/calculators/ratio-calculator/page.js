import { RatioCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Ratio Calculator – Free Online Calculator",
  description: "Simplify a ratio and calculate a proportional value.",
  alternates: { canonical: "/calculators/ratio-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><RatioCalculator /><CalculatorGuide {...calculatorGuides["ratio-calculator"]} /></div></section>;
}
