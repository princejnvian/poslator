import { MortgageCalculator } from "@/components/calculators/FinanceCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Mortgage Calculator – Estimate Monthly Payment",
  description:
    "Use POSLATOR's free mortgage calculator to estimate principal, interest, property tax, insurance, and an overall monthly housing payment.",
  alternates: { canonical: "/calculators/mortgage-calculator" },
};

const guide = calculatorGuides["mortgage-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <MortgageCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
