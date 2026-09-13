import { GradeCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Grade Calculator – Free Online Calculator",
  description: "Calculate a percentage grade and a simple letter-grade estimate.",
  alternates: { canonical: "/calculators/grade-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GradeCalculator /><CalculatorGuide {...calculatorGuides["grade-calculator"]} /></div></section>;
}
