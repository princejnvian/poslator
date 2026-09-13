from pathlib import Path
base=Path('/mnt/data/poslator_work')
items=[
('mortgage-payoff-calculator','Mortgage Payoff Calculator','MortgagePayoffCalculator','Estimate mortgage payoff time, total payments and potential interest savings from extra monthly payments.'),
('retirement-calculator','Retirement Calculator','RetirementCalculator','Project potential retirement savings from your current balance, monthly contributions, expected return and time.'),
('savings-calculator','Savings Calculator','SavingsCalculator','Estimate how savings and regular deposits can grow with interest over time.'),
('debt-payoff-calculator','Debt Payoff Calculator','DebtPayoffCalculator','Estimate how long it may take to pay off a debt balance with a fixed monthly payment.'),
('401k-calculator','401(k) Calculator','FourOhOneKCalculator','Estimate potential 401(k) growth with employee contributions, employer match and an assumed return.'),
('roth-ira-calculator','Roth IRA Calculator','RothIRACalculator','Project potential Roth IRA growth from current savings and recurring contributions.'),
('apy-calculator','APY Calculator','APYCalculator','Calculate annual percentage yield from an interest rate and compounding frequency.'),
('apr-calculator','APR Calculator','APRCalculator','Estimate APR by including upfront loan fees with a stated fixed interest rate.'),
('interest-rate-calculator','Interest Rate Calculator','InterestRateCalculator','Find a simple annual interest rate from principal, interest earned and time.'),
('debt-to-income-ratio-calculator','Debt-to-Income Ratio Calculator','DebtToIncomeCalculator','Calculate your monthly debt-to-income ratio from gross income and recurring debt payments.'),
('emergency-fund-calculator','Emergency Fund Calculator','EmergencyFundCalculator','Estimate an emergency savings target based on essential monthly expenses.'),
('net-worth-calculator','Net Worth Calculator','NetWorthCalculator','Calculate net worth by comparing assets with debts and other liabilities.'),
('hourly-to-salary-calculator','Hourly to Salary Calculator','HourlyToSalaryCalculator','Convert hourly pay into estimated weekly, monthly and annual gross salary.'),
('salary-to-hourly-calculator','Salary to Hourly Calculator','SalaryToHourlyCalculator','Convert annual salary into an estimated hourly wage and other pay periods.'),
('commission-calculator','Commission Calculator','CommissionCalculator','Calculate sales commission from a sales amount and commission percentage.'),
('bonus-calculator','Bonus Calculator','BonusCalculator','Estimate a gross bonus from annual salary and a bonus percentage.'),
('pto-calculator','PTO Calculator','PTOCalculator','Estimate remaining paid time off and convert PTO days into hours.'),
('time-zone-converter','Time Zone Converter','TimeZoneConverter','Convert a clock time between common fixed UTC offsets for quick scheduling.'),
('fraction-calculator','Fraction Calculator','FractionCalculator','Add, subtract, multiply or divide two fractions and simplify the result.'),
('ratio-calculator','Ratio Calculator','RatioCalculator','Simplify a ratio and calculate a proportional value.'),
('average-calculator','Average Calculator','AverageCalculator','Find the mean average of a list of numbers.'),
('random-number-generator','Random Number Generator','RandomNumberGenerator','Generate random integers within a chosen range directly in your browser.'),
('gcf-calculator','GCF Calculator','GCFCalculator','Find the greatest common factor of two whole numbers.'),
('lcm-calculator','LCM Calculator','LCMCalculator','Find the least common multiple of two whole numbers.'),
('scientific-calculator','Scientific Calculator','ScientificCalculator','Evaluate common arithmetic expressions with parentheses, powers and basic operators.'),
('days-between-dates-calculator','Days Between Dates Calculator','DaysBetweenDatesCalculator','Count calendar days between two dates, including both endpoints.'),
('gpa-calculator','GPA Calculator','GPACalculator','Calculate a simple GPA from course grade points.'),
('grade-calculator','Grade Calculator','GradeCalculator','Calculate a percentage grade and a simple letter-grade estimate.'),
]
for slug,title,comp,desc in items:
    d=base/'app'/'calculators'/slug; d.mkdir(parents=True,exist_ok=True)
    content=f'''import {{ {comp} }} from "@/components/calculators/ExpansionCalculators";\nimport CalculatorGuide from "@/components/CalculatorGuide";\nimport {{ calculatorGuides }} from "@/components/calculatorGuides";\n\nexport const metadata = {{\n  title: "{title} – Free Online Calculator",\n  description: "{desc}",\n  alternates: {{ canonical: "/calculators/{slug}" }},\n}};\n\nexport default function Page() {{\n  return <section className="section"><div className="container narrow calculator-page"><{comp} /><CalculatorGuide {{...calculatorGuides["{slug}"]}} /></div></section>;\n}}\n'''
    (d/'page.js').write_text(content)
print('pages',len(items))
