import { AmortizationCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Amortization Calculator",
  description: "Estimate loan payment and total interest."
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
