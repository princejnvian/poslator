import { CommissionCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Commission Calculator – Free Online Calculator",
  description: "Calculate sales commission from a sales amount and commission percentage.",
  alternates: { canonical: "/calculators/commission-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><CommissionCalculator /><CalculatorGuide {...calculatorGuides["commission-calculator"]} /></div></section>;
}
