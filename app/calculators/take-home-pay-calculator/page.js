import { TakeHomePayCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Take-Home Pay Calculator – Estimate Net Pay",
  description:
    "Use POSLATOR's free take-home pay calculator to estimate annual, monthly, and biweekly net income after simple tax and deduction assumptions.",
  alternates: { canonical: "/calculators/take-home-pay-calculator" },
};

const guide = calculatorGuides["take-home-pay-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <TakeHomePayCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
