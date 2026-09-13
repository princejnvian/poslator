import { NetWorthCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Net Worth Calculator – Free Online Calculator",
  description: "Calculate net worth by comparing assets with debts and other liabilities.",
  alternates: { canonical: "/calculators/net-worth-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><NetWorthCalculator /><CalculatorGuide {...calculatorGuides["net-worth-calculator"]} /></div></section>;
}
