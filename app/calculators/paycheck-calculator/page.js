import { PaycheckCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Paycheck Calculator – Estimate Take-Home Pay",
  description:
    "Use POSLATOR's free paycheck calculator to estimate take-home pay from gross pay, withholding assumptions, and other deductions.",
  alternates: { canonical: "/calculators/paycheck-calculator" },
};

const guide = calculatorGuides["paycheck-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <PaycheckCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
