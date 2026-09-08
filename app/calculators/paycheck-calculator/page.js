import { PaycheckCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Paycheck Calculator",
  description: "Estimate a paycheck after simple tax assumptions."
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
