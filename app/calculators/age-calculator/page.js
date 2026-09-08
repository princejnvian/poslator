import { AgeCalculator } from "@/components/calculators/AgeUnitCalculators";

export const metadata = {
  title: "Age Calculator",
  description: "Calculate exact age."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <AgeCalculator />
      </div>
    </section>
  );
}
