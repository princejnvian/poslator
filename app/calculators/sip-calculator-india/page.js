import { SIPCalculatorIndia } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "SIP Calculator India \u2013 SIP Returns Calculator",
  description: "Estimate potential SIP future value, total invested amount and projected growth.",
  alternates: { canonical: "/calculators/sip-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><SIPCalculatorIndia /><CalculatorGuide {...indiaCalculatorGuides["sip-calculator-india"]} /></div></section>;
}
