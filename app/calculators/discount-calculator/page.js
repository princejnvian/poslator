import { DiscountCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Discount Calculator",
  description: "Calculate savings and final price."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <DiscountCalculator />
      </div>
    </section>
  );
}
