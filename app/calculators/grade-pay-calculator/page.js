import { GradePayCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "Grade Pay Calculator \u2013 Basic Pay, DA & HRA",
  description: "Estimate basic pay, grade pay, DA, HRA and gross monthly salary with a transparent legacy grade-pay calculation.",
  alternates: { canonical: "/calculators/grade-pay-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GradePayCalculator /><CalculatorGuide {...indiaCalculatorGuides["grade-pay-calculator"]} /></div></section>;
}
