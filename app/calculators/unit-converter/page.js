import { UnitConverter } from "@/components/calculators/AgeUnitCalculators";

export const metadata = {
  title: "Unit Converter",
  description: "Convert common units."
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
