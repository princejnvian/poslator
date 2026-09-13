import { APRCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "APR Calculator – Free Online Calculator",
  description: "Estimate APR by including upfront loan fees with a stated fixed interest rate.",
  alternates: { canonical: "/calculators/apr-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><APRCalculator /><CalculatorGuide {...calculatorGuides["apr-calculator"]} /></div></section>;
}
