import { MortgagePayoffCalculator } from "@/components/calculators/ExpansionCalculators";
import CalculatorGuide from "@/components/CalculatorGuide";
import { calculatorGuides } from "@/components/calculatorGuides";

export const metadata = {
  title: "Mortgage Payoff Calculator – Free Online Calculator",
  description: "Estimate mortgage payoff time, total payments and potential interest savings from extra monthly payments.",
  alternates: { canonical: "/calculators/mortgage-payoff-calculator" },
};

export default function Page() {
  return <section className="section"><div className="container narrow calculator-page"><MortgagePayoffCalculator /><CalculatorGuide {...calculatorGuides["mortgage-payoff-calculator"]} /></div></section>;
}
