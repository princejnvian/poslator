import { GSTCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "GST Calculator India \u2013 Add or Remove GST",
  description: "Calculate GST amount and final price or extract GST from an inclusive price.",
  alternates: { canonical: "/calculators/gst-calculator-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><GSTCalculator /><CalculatorGuide {...indiaCalculatorGuides["gst-calculator-india"]} /></div></section>;
}
