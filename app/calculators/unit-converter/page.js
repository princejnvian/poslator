import { UnitConverter } from "@/components/calculators/AgeUnitCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Unit Converter – Length, Weight, Temperature & Volume",
  description:
    "Use POSLATOR's free unit converter to convert common US and metric length, weight, temperature, and volume measurements.",
  alternates: { canonical: "/calculators/unit-converter" },
};

const guide = calculatorGuides["unit-converter"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <UnitConverter />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
