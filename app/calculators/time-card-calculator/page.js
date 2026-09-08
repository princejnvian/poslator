import { TimeCardCalculator } from "@/components/calculators/WorkCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Time Card Calculator – Hours, Breaks & Overtime",
  description:
    "Use POSLATOR's free time card calculator to track work hours, subtract breaks, estimate overtime, and calculate gross pay.",
  alternates: { canonical: "/calculators/time-card-calculator" },
};

const guide = calculatorGuides["time-card-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <TimeCardCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
