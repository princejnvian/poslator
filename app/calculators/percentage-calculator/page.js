import { PercentageCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Percentage Calculator",
  description: "Calculate percentages and percentage change."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <PercentageCalculator />
      </div>
    </section>
  );
}
