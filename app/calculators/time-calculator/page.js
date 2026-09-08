import { TimeCalculator } from "@/components/calculators/WorkCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Time Calculator – Add & Subtract Hours and Minutes",
  description:
    "Use POSLATOR's free time calculator to add or subtract hours and minutes and convert durations to decimal hours.",
  alternates: { canonical: "/calculators/time-calculator" },
};

const guide = calculatorGuides["time-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <TimeCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
