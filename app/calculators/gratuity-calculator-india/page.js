import { GratuityCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "Gratuity Calculator India \u2013 Estimate Gratuity",
  description: "Estimate gratuity from last drawn basic salary plus DA and completed years of service.",
  alternates: { canonical: "/calculators/gratuity-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GratuityCalculator /><CalculatorGuide {...indiaCalculatorGuides["gratuity-calculator-india"]} /></div></section>;
}
