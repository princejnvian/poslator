import { GCFCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "GCF Calculator – Free Online Calculator",
  description: "Find the greatest common factor of two whole numbers.",
  alternates: { canonical: "/calculators/gcf-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GCFCalculator /><CalculatorGuide {...calculatorGuides["gcf-calculator"]} /></div></section>;
}
