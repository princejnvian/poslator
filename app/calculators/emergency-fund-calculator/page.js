import { EmergencyFundCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Emergency Fund Calculator – Free Online Calculator",
  description: "Estimate an emergency savings target based on essential monthly expenses.",
  alternates: { canonical: "/calculators/emergency-fund-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><EmergencyFundCalculator /><CalculatorGuide {...calculatorGuides["emergency-fund-calculator"]} /></div></section>;
}
