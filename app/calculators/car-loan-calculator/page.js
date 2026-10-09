import { CarLoanCalculator } from "@/components/calculators/HighDemandCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Car Loan Calculator: Monthly Payment & Interest",
  description: "Estimate car loan payments, amount financed and total interest. Compare 36-, 48-, 60-, 72- and 84-month terms with a free auto loan calculator.",
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
