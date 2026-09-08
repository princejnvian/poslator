import { PercentageCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Percentage Calculator – Percent & Percentage Change",
  description:
    "Use POSLATOR's free percentage calculator to calculate a percentage of a number and percentage change between two values.",
  alternates: { canonical: "/calculators/percentage-calculator" },
};

const guide = calculatorGuides["percentage-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <PercentageCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
