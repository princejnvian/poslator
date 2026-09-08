import { CarAffordabilityCalculator } from "@/components/calculators/FinanceCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Car Affordability Calculator – How Much Can I Afford?",
  description:
    "Use POSLATOR's free car affordability calculator to estimate a practical car budget from income, debt, down payment, interest rate, and loan term.",
  alternates: { canonical: "/calculators/car-affordability-calculator" },
};

const guide = calculatorGuides["car-affordability-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <CarAffordabilityCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
