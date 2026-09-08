import { LoanCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Loan Calculator – Monthly Payment & Interest",
  description: "Estimate a fixed-rate loan payment, total payments, and total interest with POSLATOR’s free loan calculator.",
  alternates: { canonical: "/calculators/loan-calculator" },
};

const guide = calculatorGuides["loan-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <LoanCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
