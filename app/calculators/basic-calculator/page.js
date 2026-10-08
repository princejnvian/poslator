import { BasicCalculator } from "@/components/calculators/BasicCalculator";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Basic Calculator – Free Online Calculator",
  description: "Use a fast phone-style basic calculator for addition, subtraction, multiplication, division, percentages and everyday math.",
  alternates: { canonical: "/calculators/basic-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><BasicCalculator /><CalculatorGuide {...calculatorGuides["basic-calculator"]} /></div></section>;
}
