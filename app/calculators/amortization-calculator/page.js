import { AmortizationCalculator } from "@/components/calculators/FinanceCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Amortization Calculator – Loan Payment & Interest",
  description:
    "Use POSLATOR's free amortization calculator to estimate loan payments, total interest, and the total cost of a fixed-rate loan.",
  alternates: { canonical: "/calculators/amortization-calculator" },
};

const guide = calculatorGuides["amortization-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <AmortizationCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
