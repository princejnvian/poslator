import { HoursWorkedCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Hours Worked Calculator",
  description: "Calculate exact hours worked between two times."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <HoursWorkedCalculator />
      </div>
    </section>
  );
}
