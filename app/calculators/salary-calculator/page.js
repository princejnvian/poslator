import { SalaryCalculator } from "@/components/calculators/MoneyCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Salary Calculator – Hourly, Monthly & Annual Pay",
  description:
    "Use POSLATOR's free salary calculator to convert hourly, weekly, monthly, and annual pay into comparable salary figures.",
  alternates: { canonical: "/calculators/salary-calculator" },
};

const guide = calculatorGuides["salary-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <SalaryCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
