import { SalesTaxCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Sales Tax Calculator",
  description: "Add sales tax to a purchase."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <SalesTaxCalculator />
      </div>
    </section>
  );
}
