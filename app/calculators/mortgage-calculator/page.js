import { MortgageCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Mortgage Calculator",
  description: "Estimate monthly mortgage payment."
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
