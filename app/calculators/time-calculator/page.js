import { TimeCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Time Calculator – Add & Subtract Hours and Minutes | POSLATOR",
  description:
    "Use POSLATOR's free time calculator to add or subtract hours and minutes, calculate time differences, and work with hours and minutes quickly.",
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