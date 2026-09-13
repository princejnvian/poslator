import { BonusCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Bonus Calculator – Free Online Calculator",
  description: "Estimate a gross bonus from annual salary and a bonus percentage.",
  alternates: { canonical: "/calculators/bonus-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><BonusCalculator /><CalculatorGuide {...calculatorGuides["bonus-calculator"]} /></div></section>;
}
