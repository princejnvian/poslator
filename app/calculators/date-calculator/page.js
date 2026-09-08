import { DateCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Date Calculator – Days Between Dates",
  description: "Calculate the number of days and weeks between two dates with POSLATOR’s free date calculator.",
  alternates: { canonical: "/calculators/date-calculator" },
};

const guide = calculatorGuides["date-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <DateCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
