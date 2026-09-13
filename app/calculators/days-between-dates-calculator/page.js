import { DaysBetweenDatesCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Days Between Dates Calculator – Free Online Calculator",
  description: "Count calendar days between two dates, including both endpoints.",
  alternates: { canonical: "/calculators/days-between-dates-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><DaysBetweenDatesCalculator /><CalculatorGuide {...calculatorGuides["days-between-dates-calculator"]} /></div></section>;
}
