import { EPFCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "EPF Calculator India \u2013 PF Contribution & Balance",
  description: "Estimate employee and employer EPF contributions and a simplified future EPF balance.",
  alternates: { canonical: "/calculators/epf-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><EPFCalculator /><CalculatorGuide {...indiaCalculatorGuides["epf-calculator-india"]} /></div></section>;
}
