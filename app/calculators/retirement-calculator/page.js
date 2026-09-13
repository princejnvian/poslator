import { RetirementCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Retirement Calculator – Free Online Calculator",
  description: "Project potential retirement savings from your current balance, monthly contributions, expected return and time.",
  alternates: { canonical: "/calculators/retirement-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><RetirementCalculator /><CalculatorGuide {...calculatorGuides["retirement-calculator"]} /></div></section>;
}
