import { TimeCardCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Time Card Calculator – Hours, Breaks & Overtime | POSLATOR",
  description:
    "Use POSLATOR's free time card calculator to calculate work hours, breaks, regular hours, and overtime. Track your weekly work time quickly and accurately.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <TimeCardCalculator />
      </div>
    </section>
  );
}