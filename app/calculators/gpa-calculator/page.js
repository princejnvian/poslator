import { GPACalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "GPA Calculator – Free Online Calculator",
  description: "Calculate a simple GPA from course grade points.",
  alternates: { canonical: "/calculators/gpa-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GPACalculator /><CalculatorGuide {...calculatorGuides["gpa-calculator"]} /></div></section>;
}
