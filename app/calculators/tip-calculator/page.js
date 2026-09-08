import { TipCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Tip Calculator",
  description: "Calculate tip, total and each person's share."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <TipCalculator />
      </div>
    </section>
  );
}
