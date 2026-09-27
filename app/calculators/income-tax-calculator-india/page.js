import { IncomeTaxIndiaCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "Income Tax Calculator India \u2013 AY 2026-27",
  description: "Estimate individual income tax under the AY 2026-27 new or old tax regime with simplified slab calculations.",
  alternates: { canonical: "/calculators/income-tax-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><IncomeTaxIndiaCalculator /><CalculatorGuide {...indiaCalculatorGuides["income-tax-calculator-india"]} /></div></section>;
}
