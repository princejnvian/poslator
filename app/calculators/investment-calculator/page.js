import { InvestmentCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Investment Calculator – Project Future Value",
  description: "Project potential investment growth with an initial investment, monthly contributions, expected return, and time horizon.",
  alternates: { canonical: "/calculators/investment-calculator" },
};

const guide = calculatorGuides["investment-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <InvestmentCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
