import { TipCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Tip Calculator – Tip, Total & Bill Split",
  description:
    "Use POSLATOR's free tip calculator to calculate a tip, total bill, and each person's share.",
  alternates: { canonical: "/calculators/tip-calculator" },
};

const guide = calculatorGuides["tip-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <TipCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
