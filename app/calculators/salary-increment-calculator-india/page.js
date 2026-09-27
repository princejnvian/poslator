import { SalaryIncrementIndiaCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "Salary Increment Calculator India \u2013 Hike Calculator",
  description: "Calculate salary hike amount and new monthly and annual salary from an increment percentage.",
  alternates: { canonical: "/calculators/salary-increment-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><SalaryIncrementIndiaCalculator /><CalculatorGuide {...indiaCalculatorGuides["salary-increment-calculator-india"]} /></div></section>;
}
