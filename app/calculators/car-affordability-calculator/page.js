import { CarAffordabilityCalculator } from "@/components/calculators/FinanceCalculators";

export const metadata = {
  title: "Car Affordability Calculator",
  description: "Estimate a car price from income and debt."
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
