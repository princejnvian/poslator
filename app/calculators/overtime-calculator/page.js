import { OvertimeCalculator } from "@/components/calculators/WorkCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Overtime Calculator – Calculate Overtime Pay",
  description:
    "Use POSLATOR's free overtime calculator to estimate regular pay, overtime pay, and total gross pay from your hours and hourly rate.",
  alternates: { canonical: "/calculators/overtime-calculator" },
};

const guide = calculatorGuides["overtime-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <OvertimeCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
