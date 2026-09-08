import { AgeCalculator } from "@/components/calculators/AgeUnitCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Age Calculator – Calculate Your Exact Age",
  description:
    "Use POSLATOR's free age calculator to calculate your exact age in years, months, and days. Enter your date of birth and find your current age instantly.",
  alternates: { canonical: "/calculators/age-calculator" },
};

const guide = calculatorGuides["age-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <AgeCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
