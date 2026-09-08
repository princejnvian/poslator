import { CarAffordabilityCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Car Affordability Calculator – How Much Car Can I Afford? | POSLATOR",
  description:
    "Use POSLATOR's free car affordability calculator to estimate how much you can comfortably spend on a car based on your income, debt, and monthly budget.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <CarAffordabilityCalculator />
      </div>
    </section>
  );
}