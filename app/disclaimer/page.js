export const metadata = {
  title: "Calculator Disclaimer",
  description:
    "Important information about POSLATOR calculator estimates, financial calculations, taxes, payroll, loans, and other results.",
  alternates: { canonical: "/disclaimer" },
};

export default function Disclaimer() {
  return (
    <section className="section">
      <div className="container prose">
        <div className="eyebrow">IMPORTANT</div>
        <h1>Calculator Disclaimer</h1>

        <p>
          POSLATOR calculators are designed to provide quick estimates for
          everyday planning and educational use. Results should not be treated
          as guaranteed real-world figures.
        </p>

        <h2>Financial and loan calculations</h2>
        <p>
          Mortgage, amortization, car affordability, salary, paycheck, and
          take-home pay results depend on assumptions entered into the tool and
          may differ from actual lender, employer, payroll, or tax calculations.
          Interest rates, fees, taxes, insurance, deductions, and eligibility
          rules can change the final amount.
        </p>

        <h2>Taxes and payroll</h2>
        <p>
          Tax and payroll calculations are simplified estimates. Actual
          withholding and tax liability can depend on filing status, income,
          benefits, deductions, location, employer settings, and current rules.
          POSLATOR is not a tax or payroll service.
        </p>

        <h2>Other calculators</h2>
        <p>
          Time, percentage, discount, tip, sales tax, age, and unit conversion
          tools are intended for general calculations. For technical, legal,
          medical, financial, or regulated uses, verify important results with
          an appropriate authoritative source.
        </p>

        <h2>Your responsibility</h2>
        <p>
          Before making an important decision based on a calculator result,
          independently verify the inputs, formulas, rates, and applicable rules.
          By using POSLATOR, you acknowledge that estimates may not match your
          actual circumstances.
        </p>

        <h2>Contact</h2>
        <p>
          If you believe a calculator contains an issue, please contact us at
          <a href="mailto:princejnvian@gmail.com"> princejnvian@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
