import { DiscountCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Discount Calculator – Calculate Sale Price & Savings | POSLATOR",
  description:
    "Use POSLATOR's free discount calculator to find your savings, discount amount, and final sale price. Quickly calculate discounts for any purchase.",
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