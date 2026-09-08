import { CarLoanCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Car Loan Calculator – Estimate Monthly Payment",
  description: "Estimate your car loan payment using vehicle price, down payment, trade-in value, interest rate, and loan term.",
  alternates: { canonical: "/calculators/car-loan-calculator" },
};

const guide = calculatorGuides["car-loan-calculator"];

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow calculator-page">
        <CarLoanCalculator />
        <CalculatorGuide {...guide} />
      </div>
    </section>
  );
}
