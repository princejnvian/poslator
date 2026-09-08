import { MortgageCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Mortgage Calculator – Estimate Monthly Payment | POSLATOR",
  description:
    "Use POSLATOR's free mortgage calculator to estimate your monthly mortgage payment, including principal and interest. Adjust loan amount, interest rate, and term.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <MortgageCalculator />
      </div>
    </section>
  );
}