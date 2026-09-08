import { OvertimeCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Overtime Calculator",
  description: "Estimate regular and overtime pay."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <OvertimeCalculator />
      </div>
    </section>
  );
}
