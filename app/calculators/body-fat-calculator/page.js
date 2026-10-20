import { BodyFatCalculator } from "@/components/calculators/NewCalculators";
export const metadata = { title: "Body Fat Calculator – Free Online Calculator | POSLATOR", description: "Estimate body fat percentage with the US Navy circumference method.", alternates: { canonical: "/calculators/body-fat-calculator" } };
export default function Page() { return <section className="section"><div className="container narrow calculator-page"><BodyFatCalculator /></div></section>; }
