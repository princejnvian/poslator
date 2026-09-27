import { PPFCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "PPF Calculator India \u2013 PPF Maturity Value",
  description: "Estimate PPF growth from annual contributions, an assumed interest rate and investment period.",
  alternates: { canonical: "/calculators/ppf-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><PPFCalculator /><CalculatorGuide {...indiaCalculatorGuides["ppf-calculator-india"]} /></div></section>;
}
