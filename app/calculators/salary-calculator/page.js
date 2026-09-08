import { SalaryCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Salary Calculator",
  description: "Convert pay between hourly, weekly, monthly and annual."
};

export default function Page() {
  return (
    <section className="section">
      <div className="container narrow">
        <SalaryCalculator />
      </div>
    </section>
  );
}
