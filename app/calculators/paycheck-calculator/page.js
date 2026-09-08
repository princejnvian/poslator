import { PaycheckCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Paycheck Calculator – Estimate Take-Home Pay | POSLATOR",
  description:
    "Use POSLATOR's free paycheck calculator to estimate your take-home pay from your gross paycheck. Adjust pay frequency, earnings, and simple tax assumptions.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <PaycheckCalculator />
      </div>
    </section>
  );
}