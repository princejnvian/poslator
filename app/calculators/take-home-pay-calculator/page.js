import { TakeHomePayCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Take-Home Pay Calculator – Estimate Net Pay | POSLATOR",
  description:
    "Use POSLATOR's free take-home pay calculator to estimate your net pay from your gross salary. Calculate annual, monthly, weekly, and hourly take-home income.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <TakeHomePayCalculator />
      </div>
    </section>
  );
}