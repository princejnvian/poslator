import { FuelCostCalculator } from "@/components/calculators/NewCalculators";
export const metadata = { title: "Fuel Cost Calculator – Free Online Calculator | POSLATOR", description: "Estimate road-trip fuel needs and cost from distance, vehicle efficiency and fuel price.", alternates: { canonical: "/calculators/fuel-cost-calculator" } };
export default function Page() { return <section className="section"><div className="container narrow calculator-page"><FuelCostCalculator /></div></section>; }
