import { BMICalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "BMI Calculator – Calculate Body Mass Index",
  description: "Calculate BMI from height and weight with POSLATOR’s free adult BMI calculator and see the standard BMI category.",
  alternates: { canonical: "/calculators/bmi-calculator" },
};

const guide = calculatorGuides["bmi-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <BMICalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
