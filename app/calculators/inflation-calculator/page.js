import { InflationCalculator } from "@/components/calculators/NewCalculators";
export const metadata = { title: "Inflation Calculator – Free Online Calculator | POSLATOR", description: "Estimate how inflation changes future prices and the purchasing power of money.", alternates: { canonical: "/calculators/inflation-calculator" } };
export default function Page() { return <section className="section"><div className="container narrow calculator-page"><InflationCalculator /></div></section>; }
