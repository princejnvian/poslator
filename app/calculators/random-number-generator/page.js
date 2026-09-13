import { RandomNumberGenerator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Random Number Generator – Free Online Calculator",
  description: "Generate random integers within a chosen range directly in your browser.",
  alternates: { canonical: "/calculators/random-number-generator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><RandomNumberGenerator /><CalculatorGuide {...calculatorGuides["random-number-generator"]} /></div></section>;
}
