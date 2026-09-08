import { TipCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Tip Calculator – Calculate Tip & Split the Bill | POSLATOR",
  description:
    "Use POSLATOR's free tip calculator to calculate the tip, total bill, and each person's share. Easily split restaurant bills and choose your tip percentage.",
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <TipCalculator />
      </div>
    </section>
  );
}