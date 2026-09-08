import { AgeCalculator } from "@/components/calculators/AgeUnitCalculators";

export const metadata = {
  title: "Age Calculator – Calculate Your Exact Age | POSLATOR",
  description:
    "Use POSLATOR's free age calculator to calculate your exact age in years, months, and days. Enter your date of birth and find your current age instantly.",
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