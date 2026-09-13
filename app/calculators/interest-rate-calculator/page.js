import { InterestRateCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Interest Rate Calculator – Free Online Calculator",
  description: "Find a simple annual interest rate from principal, interest earned and time.",
  alternates: { canonical: "/calculators/interest-rate-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><InterestRateCalculator /><CalculatorGuide {...calculatorGuides["interest-rate-calculator"]} /></div></section>;
}
