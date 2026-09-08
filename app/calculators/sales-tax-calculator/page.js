import { SalesTaxCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Sales Tax Calculator – Calculate Sales Tax & Total | POSLATOR",
  description:
    "Use POSLATOR's free sales tax calculator to calculate sales tax and the final price of a purchase. Enter the price and tax rate to quickly find the total cost.",
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