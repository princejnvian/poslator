import { CreditCardPayoffCalculator } from "@/components/calculators/NewCalculators";
export const metadata = { title: "Credit Card Payoff Calculator – Free Online Calculator | POSLATOR", description: "Estimate credit card payoff time, total interest and total amount paid.", alternates: { canonical: "/calculators/credit-card-payoff-calculator" } };
export default function Page() { return <section className="section"><div className="container narrow calculator-page"><CreditCardPayoffCalculator /></div></section>; }
