import { CompoundInterestCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Compound Interest Calculator – Savings Growth",
  description: "Estimate compound interest growth with a starting balance, monthly contributions, interest rate, and compounding frequency.",
  alternates: { canonical: "/calculators/compound-interest-calculator" },
};

const guide = calculatorGuides["compound-interest-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <CompoundInterestCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
