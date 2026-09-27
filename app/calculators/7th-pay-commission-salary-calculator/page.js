import { PayCommissionCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "7th Pay Commission Salary Calculator \u2013 DA, HRA & NPS",
  description: "Estimate central government salary from basic pay, DA, HRA, transport allowance and an optional NPS deduction.",
  alternates: { canonical: "/calculators/7th-pay-commission-salary-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><PayCommissionCalculator /><CalculatorGuide {...indiaCalculatorGuides["7th-pay-commission-salary-calculator"]} /></div></section>;
}
