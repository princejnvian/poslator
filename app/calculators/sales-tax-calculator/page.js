import { SalesTaxCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Sales Tax Calculator – Tax & Total Price",
  description:
    "Use POSLATOR's free sales tax calculator to calculate sales tax and the final price of a purchase using a rate you provide.",
  alternates: { canonical: "/calculators/sales-tax-calculator" },
};

const guide = calculatorGuides["sales-tax-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <SalesTaxCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
