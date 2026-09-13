import { SalaryToHourlyCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Salary to Hourly Calculator – Free Online Calculator",
  description: "Convert annual salary into an estimated hourly wage and other pay periods.",
  alternates: { canonical: "/calculators/salary-to-hourly-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><SalaryToHourlyCalculator /><CalculatorGuide {...calculatorGuides["salary-to-hourly-calculator"]} /></div></section>;
}
