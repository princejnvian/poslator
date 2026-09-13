import { RothIRACalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Roth IRA Calculator – Free Online Calculator",
  description: "Project potential Roth IRA growth from current savings and recurring contributions.",
  alternates: { canonical: "/calculators/roth-ira-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><RothIRACalculator /><CalculatorGuide {...calculatorGuides["roth-ira-calculator"]} /></div></section>;
}
