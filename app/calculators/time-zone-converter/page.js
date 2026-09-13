import { TimeZoneConverter } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Time Zone Converter – Free Online Calculator",
  description: "Convert a clock time between common fixed UTC offsets for quick scheduling.",
  alternates: { canonical: "/calculators/time-zone-converter" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><TimeZoneConverter /><CalculatorGuide {...calculatorGuides["time-zone-converter"]} /></div></section>;
}
