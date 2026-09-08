import { AmortizationCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Amortization Calculator – Loan Payment & Interest | POSLATOR",
  description:
    "Use POSLATOR's free amortization calculator to estimate loan payments, total interest, and the total cost of a loan based on amount, interest rate, and term.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <AmortizationCalculator />
      </div>
    </section>
  );
}