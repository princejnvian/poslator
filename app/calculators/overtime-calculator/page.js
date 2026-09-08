import { OvertimeCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Overtime Calculator – Calculate Overtime Pay | POSLATOR",
  description:
    "Use POSLATOR's free overtime calculator to estimate regular pay, overtime hours, and overtime pay based on your hourly rate and work hours.",
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