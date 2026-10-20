import { RentVsBuyCalculator } from "@/components/calculators/NewCalculators";
export const metadata = { title: "Rent vs. Buy Calculator – Free Online Calculator | POSLATOR", description: "Compare estimated renting costs with homeownership costs over your planned time horizon.", alternates: { canonical: "/calculators/rent-vs-buy-calculator" } };
export default function Page() { return <section className="section"><div className="container narrow calculator-page"><RentVsBuyCalculator /></div></section>; }
