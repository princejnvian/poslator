import { TakeHomePayCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Take Home Pay Calculator",
  description: "Estimate annual and periodic take-home pay."
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
