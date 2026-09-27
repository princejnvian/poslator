import { HRACalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "HRA Calculator India \u2013 HRA Exemption",
  description: "Estimate HRA exemption from salary, rent, HRA received and metro or non-metro percentage.",
  alternates: { canonical: "/calculators/hra-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><HRACalculator /><CalculatorGuide {...indiaCalculatorGuides["hra-calculator-india"]} /></div></section>;
}
