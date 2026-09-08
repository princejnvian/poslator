import { HoursWorkedCalculator } from "@/components/calculators/WorkCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Hours Worked Calculator – Calculate Work Hours",
  description:
    "Use POSLATOR's free hours worked calculator to calculate time worked between a start and end time, including unpaid breaks and decimal hours.",
  alternates: { canonical: "/calculators/hours-worked-calculator" },
};

const guide = calculatorGuides["hours-worked-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <HoursWorkedCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
