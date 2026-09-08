import { DiscountCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Discount Calculator – Sale Price & Savings",
  description:
    "Use POSLATOR's free discount calculator to find your savings, discounted price, and final price after optional sales tax.",
  alternates: { canonical: "/calculators/discount-calculator" },
};

const guide = calculatorGuides["discount-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <DiscountCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
