import { NPSCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "NPS Calculator India \u2013 Pension & Corpus",
  description: "Project NPS corpus and an illustrative annuity-based monthly pension from regular contributions.",
  alternates: { canonical: "/calculators/nps-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><NPSCalculator /><CalculatorGuide {...indiaCalculatorGuides["nps-calculator-india"]} /></div></section>;
}
