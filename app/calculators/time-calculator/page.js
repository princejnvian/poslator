import { TimeCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Time Calculator",
  description: "Add or subtract hours and minutes."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <TimeCalculator />
      </div>
    </section>
  );
}
