import { APYCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "APY Calculator – Free Online Calculator",
  description: "Calculate annual percentage yield from an interest rate and compounding frequency.",
  alternates: { canonical: "/calculators/apy-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><APYCalculator /><CalculatorGuide {...calculatorGuides["apy-calculator"]} /></div></section>;
}
