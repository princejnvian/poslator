import { PercentageCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Percentage Calculator – Percent & Percentage Change | POSLATOR",
  description:
    "Use POSLATOR's free percentage calculator to calculate percentages, find percentage increases or decreases, and work out percentage change quickly and easily.",
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