import { UnitConverter } from "@/components/calculators/AgeUnitCalculators";

export const metadata = {
  title: "Unit Converter – Length, Weight, Temperature & Volume | POSLATOR",
  description:
    "Use POSLATOR's free unit converter to convert length, weight, temperature, and volume between common US and metric units quickly and easily.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <UnitConverter />
      </div>
    </section>
  );
}