import { FourOhOneKCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "401(k) Calculator – Free Online Calculator",
  description: "Estimate potential 401(k) growth with employee contributions, employer match and an assumed return.",
  alternates: { canonical: "/calculators/401k-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><FourOhOneKCalculator /><CalculatorGuide {...calculatorGuides["401k-calculator"]} /></div></section>;
}
