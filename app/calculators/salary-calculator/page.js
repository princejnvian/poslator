import { SalaryCalculator } from "@/components/calculators/MoneyCalculators";

export const metadata = {
  title: "Salary Calculator – Hourly, Monthly & Annual Salary | POSLATOR",
  description:
    "Use POSLATOR's free salary calculator to convert hourly, weekly, monthly, and annual pay. Quickly estimate your salary across different pay periods.",
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