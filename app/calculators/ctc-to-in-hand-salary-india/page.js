import { CTCInHandIndiaCalculator } from "@/components/calculators/IndiaCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { indiaCalculatorGuides } from "@/components/indiaCalculatorGuides";

export const metadata = {
  title: "CTC to In-Hand Salary Calculator India",
  description: "Estimate monthly take-home salary from annual CTC after bonus, PF, professional tax and other deductions.",
  alternates: { canonical: "/calculators/ctc-to-in-hand-salary-india" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><CTCInHandIndiaCalculator /><CalculatorGuide {...indiaCalculatorGuides["ctc-to-in-hand-salary-india"]} /></div></section>;
}
