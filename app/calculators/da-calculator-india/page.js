import { DACalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "DA Calculator India \u2013 Dearness Allowance",
  description: "Calculate Dearness Allowance from basic pay and an applicable DA percentage.",
  alternates: { canonical: "/calculators/da-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><DACalculator /><CalculatorGuide {...indiaCalculatorGuides["da-calculator-india"]} /></div></section>;
}
