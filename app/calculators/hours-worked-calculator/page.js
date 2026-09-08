import { HoursWorkedCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Hours Worked Calculator – Calculate Work Hours | POSLATOR",
  description:
    "Use POSLATOR's free hours worked calculator to calculate the exact time worked between a start and end time, including work hours and minutes.",
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