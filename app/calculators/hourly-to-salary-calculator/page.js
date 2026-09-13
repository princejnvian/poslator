import { HourlyToSalaryCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Hourly to Salary Calculator – Free Online Calculator",
  description: "Convert hourly pay into estimated weekly, monthly and annual gross salary.",
  alternates: { canonical: "/calculators/hourly-to-salary-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><HourlyToSalaryCalculator /><CalculatorGuide {...calculatorGuides["hourly-to-salary-calculator"]} /></div></section>;
}
