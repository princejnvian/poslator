import { TimeCardCalculator } from "@/components/calculators/WorkCalculators";

export const metadata = {
  title: "Time Card Calculator",
  description: "Track a work week, breaks, regular hours and overtime."
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
