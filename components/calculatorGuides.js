export const calculatorGuides = {
  "mortgage-calculator": {
    title: "Mortgage Calculator",
    intro: "A mortgage payment depends on the amount you borrow, your interest rate, and the length of the loan. This calculator also lets you include annual property taxes and homeowners insurance for a broader monthly estimate.",
    steps: [
      "Enter the home price and the down payment you plan to make.",
      "Enter the annual interest rate and loan term in years.",
      "Add annual property tax and homeowners insurance if you want them included in the monthly estimate.",
      "Review the loan amount, principal and interest payment, and estimated total monthly payment."
    ],
    howItWorks: "For a fixed-rate loan, the principal-and-interest payment is calculated from the loan amount, monthly interest rate, and total number of monthly payments. Property tax and insurance are then divided by 12 and added to the monthly estimate.",
    example: "A $400,000 home with an $80,000 down payment leaves a $320,000 loan. At 6.5% for 30 years, the calculator estimates the principal-and-interest payment and can add annual tax and insurance on top.",
    tips: [
      "A larger down payment reduces the amount you need to finance.",
      "Taxes and insurance vary by property and location, so use realistic local estimates.",
      "PMI, HOA dues, closing costs, lender fees, and other expenses may increase your actual housing cost.",
      "Use the result as a planning estimate rather than a loan offer or approval."
    ],
    faqs: [
      { question: "What does a mortgage payment include?", answer: "Principal and interest are the core loan payment. Many homeowners also budget for property taxes and homeowners insurance, while PMI and HOA dues may apply separately." },
      { question: "Does a bigger down payment lower the monthly payment?", answer: "Usually, yes. A larger down payment means a smaller loan balance, which generally reduces principal and interest." },
      { question: "Does this calculator show the exact payment from a lender?", answer: "No. It is a planning estimate. Lender terms, taxes, insurance, fees, and other costs can change the actual payment." },
      { question: "Can I compare different loan terms?", answer: "Yes. Try different terms and rates to see how the monthly payment and total interest change." }
    ],
    related: [
      { title: "Amortization Calculator", href: "/calculators/amortization-calculator", description: "Estimate payments and total interest." },
      { title: "Car Affordability Calculator", href: "/calculators/car-affordability-calculator", description: "Estimate a practical car budget." },
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Estimate income after deductions." }
    ]
  },
  "paycheck-calculator": {
    title: "Paycheck Calculator",
    intro: "A paycheck calculator helps you estimate what may remain from a gross paycheck after simple withholding and deduction assumptions. POSLATOR keeps the inputs transparent so you can adjust them to match your situation.",
    steps: [
      "Enter your gross paycheck amount before deductions.",
      "Enter estimated federal and state or local withholding percentages.",
      "Enter a FICA estimate and any other deductions you want to include.",
      "Review the estimated taxes and deductions and the resulting take-home amount."
    ],
    howItWorks: "Each percentage-based deduction is calculated from gross pay. The calculator subtracts federal withholding, state or local withholding, FICA, and any fixed other deductions from the gross paycheck.",
    example: "If your gross paycheck is $2,000 and your combined percentage assumptions total 24.65%, those percentage deductions equal $493 before any additional fixed deductions are applied.",
    tips: [
      "Actual withholding depends on factors such as filing status, W-4 elections, benefits, and local rules.",
      "Use your recent pay stub to choose more realistic deduction assumptions.",
      "A paycheck estimate is different from a final tax calculation.",
      "Benefits, retirement contributions, and other payroll deductions can materially change take-home pay."
    ],
    faqs: [
      { question: "Is this an official US tax calculator?", answer: "No. It is a simple planning calculator and does not replace payroll software, tax forms, or official tax guidance." },
      { question: "What is gross pay?", answer: "Gross pay is your earnings before taxes and other payroll deductions are taken out." },
      { question: "Why can my actual paycheck differ?", answer: "Your employer may use different withholding settings, benefits, retirement contributions, local taxes, or other deductions." },
      { question: "Can I use this for budgeting?", answer: "Yes. It can provide a quick estimate for planning, especially when you adjust the assumptions to resemble your actual paycheck." }
    ],
    related: [
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Estimate annual net income." },
      { title: "Salary Calculator", href: "/calculators/salary-calculator", description: "Convert pay across periods." },
      { title: "Overtime Calculator", href: "/calculators/overtime-calculator", description: "Estimate overtime and gross pay." }
    ]
  },
  "salary-calculator": {
    title: "Salary Calculator",
    intro: "The Salary Calculator converts hourly, weekly, monthly, and annual pay into comparable figures. It is useful when comparing job offers, budgeting income, or translating a rate into an annual salary.",
    steps: [
      "Enter the amount you are paid and select the pay frequency.",
      "If you are starting with an hourly rate, enter your hours per week.",
      "Set the number of working weeks per year if it differs from 52.",
      "Compare the annual, monthly, weekly, and hourly results."
    ],
    howItWorks: "Hourly pay is multiplied by hours per week and weeks per year. Weekly pay is multiplied by weeks per year, while monthly pay is multiplied by 12. Annual pay is used directly.",
    example: "At $25 per hour, 40 hours per week, and 52 weeks per year, the simple annualized salary is $52,000.",
    tips: [
      "Use realistic working weeks if you have unpaid time off.",
      "Salary conversions do not automatically account for taxes or benefits.",
      "Part-time schedules can be compared by changing weekly hours.",
      "Your employment contract may define pay differently from a simple annualized conversion."
    ],
    faqs: [
      { question: "How do I convert hourly pay to annual salary?", answer: "Multiply the hourly rate by hours worked per week and then by working weeks per year." },
      { question: "How do I convert annual salary to hourly pay?", answer: "This calculator divides annual pay by your selected weeks per year and a standard 40-hour workweek for the hourly comparison shown." },
      { question: "Does salary mean take-home pay?", answer: "No. Salary is normally a gross earnings figure before taxes and other deductions." },
      { question: "Can I use this for a part-time job?", answer: "Yes. Change the weekly hours to match the schedule you expect to work." }
    ],
    related: [
      { title: "Paycheck Calculator", href: "/calculators/paycheck-calculator", description: "Estimate a paycheck after deductions." },
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Estimate net annual income." },
      { title: "Overtime Calculator", href: "/calculators/overtime-calculator", description: "Add overtime to hourly earnings." }
    ]
  },
  "take-home-pay-calculator": {
    title: "Take Home Pay Calculator",
    intro: "Take-home pay is the amount left after estimated taxes and other deductions. This calculator gives you a simple annual estimate and converts it to monthly and biweekly amounts.",
    steps: [
      "Enter your gross annual salary.",
      "Enter estimated federal, state or local, and FICA percentages.",
      "Add any other annual deductions you want to account for.",
      "Review the estimated annual, monthly, and biweekly take-home amounts."
    ],
    howItWorks: "The calculator applies each percentage to gross annual salary, subtracts those estimated taxes and deductions, and then subtracts any fixed annual deductions. The remaining amount is the estimated net income.",
    example: "For a $75,000 salary, you can enter your own withholding assumptions and annual deductions to see an estimated net salary and its monthly and biweekly equivalents.",
    tips: [
      "Actual taxes are based on your circumstances and tax rules, not one fixed percentage.",
      "Health insurance, retirement contributions, and other benefits can reduce take-home pay.",
      "Use a recent pay stub when choosing assumptions for a closer budgeting estimate.",
      "This tool is not tax advice or an official payroll calculation."
    ],
    faqs: [
      { question: "What is take-home pay?", answer: "Take-home pay, or net pay, is the money remaining after taxes and other payroll deductions are removed from gross earnings." },
      { question: "Is take-home pay the same as net salary?", answer: "In everyday budgeting, the terms are often used similarly to describe income after deductions." },
      { question: "Why is my actual net pay different?", answer: "Your actual withholding, benefits, retirement contributions, and other deductions may differ from the assumptions entered here." },
      { question: "Can I use this to compare two salaries?", answer: "Yes, but compare both offers using similar assumptions and remember that benefits and local taxes can also affect the overall value." }
    ],
    related: [
      { title: "Paycheck Calculator", href: "/calculators/paycheck-calculator", description: "Estimate take-home from a paycheck." },
      { title: "Salary Calculator", href: "/calculators/salary-calculator", description: "Convert gross pay across periods." },
      { title: "Mortgage Calculator", href: "/calculators/mortgage-calculator", description: "Estimate a monthly housing payment." }
    ]
  },
  "amortization-calculator": {
    title: "Amortization Calculator",
    intro: "An amortization calculator shows how a fixed-rate loan can be paid down over time. It helps you compare monthly payments, total payments, and the amount of interest paid over the loan term.",
    steps: [
      "Enter the amount you want to borrow.",
      "Enter the annual interest rate.",
      "Choose the loan term in years.",
      "Review the estimated monthly payment, total payments, and total interest."
    ],
    howItWorks: "The standard fixed-rate payment formula uses the loan principal, monthly interest rate, and number of monthly payments. Total payments equal the monthly payment multiplied by the number of payments, and total interest is the difference between total payments and principal.",
    example: "A $320,000 loan at 6.5% over 30 years produces a fixed monthly principal-and-interest estimate. Changing the rate or term shows how the payment and total interest respond.",
    tips: [
      "Longer terms usually lower the monthly payment but can increase total interest.",
      "A lower interest rate can reduce both the payment and total interest.",
      "This calculator assumes a fixed rate and does not model every lender fee or loan feature.",
      "Extra payments can change a real loan's payoff schedule, but they are not modeled here."
    ],
    faqs: [
      { question: "What does amortization mean?", answer: "Amortization is the process of paying a loan down through scheduled payments over time, with each payment allocated between interest and principal." },
      { question: "Does the calculator include taxes and insurance?", answer: "No. It focuses on the fixed-rate loan payment and total interest." },
      { question: "Why is total interest so high on a long loan?", answer: "Interest is charged over many more payment periods, so a longer repayment period can substantially increase the total interest paid." },
      { question: "Can I compare 15-year and 30-year loans?", answer: "Yes. Run the calculator with each term and compare the monthly payment and total interest." }
    ],
    related: [
      { title: "Mortgage Calculator", href: "/calculators/mortgage-calculator", description: "Estimate a home payment with taxes." },
      { title: "Car Affordability Calculator", href: "/calculators/car-affordability-calculator", description: "Estimate a vehicle budget." },
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Compare payments with net income." }
    ]
  },
  "car-affordability-calculator": {
    title: "Car Affordability Calculator",
    intro: "Car affordability is about more than the sticker price. This calculator estimates a practical car price from income, existing monthly debt, down payment, interest rate, and a target percentage of monthly income for the car payment.",
    steps: [
      "Enter your annual income and current monthly debt payments.",
      "Enter the down payment you expect to make.",
      "Choose an interest rate and loan term.",
      "Set the percentage of monthly income you want to target for the car payment and review the estimated maximum price."
    ],
    howItWorks: "The calculator converts annual income to monthly income, applies the selected payment percentage, subtracts existing monthly debt, and treats the remainder as the target car payment. It then estimates the amount that payment could finance and adds the down payment.",
    example: "With $75,000 annual income and $800 in existing monthly debt, changing the target payment percentage lets you see how a more conservative or aggressive car budget changes the estimated maximum price.",
    tips: [
      "Insurance, fuel, maintenance, registration, taxes, and repairs are separate ownership costs.",
      "A lender may approve more or less than a budget-based estimate.",
      "A larger down payment can reduce the amount financed, but keep enough cash for emergencies.",
      "Use a conservative payment target if your income or expenses vary."
    ],
    faqs: [
      { question: "How much car can I afford?", answer: "There is no single number for everyone. Income, existing debt, down payment, interest rate, and other ownership costs all matter." },
      { question: "Does this calculator include insurance and fuel?", answer: "No. The result focuses on an estimated car payment and purchase price. Budget separately for ownership costs." },
      { question: "Is the result the same as a lender's approval?", answer: "No. Lenders use their own underwriting rules, credit information, debt ratios, and loan terms." },
      { question: "Should I use gross or take-home income?", answer: "This calculator asks for annual income as a budgeting input. For a personal budget, compare the result with your actual take-home pay and recurring expenses as well." }
    ],
    related: [
      { title: "Amortization Calculator", href: "/calculators/amortization-calculator", description: "Estimate loan payment and interest." },
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Estimate income after deductions." },
      { title: "Mortgage Calculator", href: "/calculators/mortgage-calculator", description: "Estimate a housing payment." }
    ]
  },
  "time-card-calculator": {
    title: "Time Card Calculator",
    intro: "A time card calculator helps you total a workweek by subtracting unpaid breaks and separating regular and overtime hours. POSLATOR also estimates gross pay from an hourly rate.",
    steps: [
      "Enter your hourly rate.",
      "For each workday, enter the start time, end time, and unpaid break minutes.",
      "Check the calculated hours for each day and the weekly total.",
      "Review regular hours, overtime hours, and estimated gross pay."
    ],
    howItWorks: "For each day, the calculator finds the time between start and end, subtracts the unpaid break, and adds the result to the weekly total. Up to 40 weekly hours are treated as regular hours and hours above 40 as overtime at 1.5 times the rate.",
    example: "A shift from 8:30 AM to 5:00 PM with a 30-minute unpaid break equals 8 hours worked. Five identical weekdays total 40 hours.",
    tips: [
      "Enter unpaid breaks in minutes rather than hours.",
      "The default overtime rule is a simple 40-hour weekly estimate and may not match every employer or jurisdiction.",
      "Overnight shifts are supported when the end time is earlier than the start time.",
      "Check your employer's timekeeping and overtime rules for payroll purposes."
    ],
    faqs: [
      { question: "Does the calculator subtract lunch breaks?", answer: "Yes. Enter the unpaid break length in minutes for each day." },
      { question: "Does it calculate overtime?", answer: "Yes. The default estimate treats hours over 40 in the week as overtime at 1.5 times the hourly rate." },
      { question: "Can I use it for overnight shifts?", answer: "Yes. If the end time is earlier than the start time, the calculator treats the shift as crossing midnight." },
      { question: "Can the result be used for payroll?", answer: "It is best used as a planning or checking tool. Employer policies and local labor rules may differ." }
    ],
    related: [
      { title: "Hours Worked Calculator", href: "/calculators/hours-worked-calculator", description: "Calculate one shift quickly." },
      { title: "Overtime Calculator", href: "/calculators/overtime-calculator", description: "Focus on overtime pay." },
      { title: "Salary Calculator", href: "/calculators/salary-calculator", description: "Convert hourly and salary pay." }
    ]
  },
  "hours-worked-calculator": {
    title: "Hours Worked Calculator",
    intro: "Use this calculator to find the time worked between a start and end time after subtracting an unpaid break. It also shows the result as decimal hours for timesheets and payroll estimates.",
    steps: [
      "Enter the shift start time.",
      "Enter the shift end time.",
      "Enter any unpaid break in minutes.",
      "Review the hours-and-minutes result and decimal-hour result."
    ],
    howItWorks: "The calculator finds the difference between the two times, accounts for a shift crossing midnight when necessary, and subtracts the unpaid break. Decimal hours are calculated by dividing total minutes by 60.",
    example: "8:30 AM to 5:00 PM is 8.5 hours before a break. After a 30-minute unpaid break, the result is 8 hours, or 8.00 decimal hours.",
    tips: [
      "Use minutes for unpaid breaks so the subtraction is precise.",
      "Decimal hours are useful when a timesheet asks for values such as 7.50 hours.",
      "Overnight shifts are handled when the end time is earlier than the start time.",
      "Payroll rules can differ from a simple elapsed-time calculation."
    ],
    faqs: [
      { question: "How do I calculate hours worked from two times?", answer: "Find the elapsed time between the start and end, then subtract any unpaid break." },
      { question: "What are decimal hours?", answer: "Decimal hours express minutes as a fraction of an hour. For example, 30 minutes equals 0.50 hours." },
      { question: "Does it work for overnight shifts?", answer: "Yes. An end time earlier than the start time is treated as a shift crossing midnight." },
      { question: "Why does my timesheet use decimal hours?", answer: "Decimal hours make it easier for payroll and billing systems to calculate pay or billable time." }
    ],
    related: [
      { title: "Time Card Calculator", href: "/calculators/time-card-calculator", description: "Track a full workweek." },
      { title: "Overtime Calculator", href: "/calculators/overtime-calculator", description: "Estimate overtime pay." },
      { title: "Time Calculator", href: "/calculators/time-calculator", description: "Add or subtract durations." }
    ]
  },
  "overtime-calculator": {
    title: "Overtime Calculator",
    intro: "An overtime calculator estimates regular pay, overtime pay, and total gross pay when some hours are paid at a higher multiplier. You can choose the overtime threshold and multiplier to fit the estimate you need.",
    steps: [
      "Enter the total number of hours worked.",
      "Enter your hourly pay rate.",
      "Set the number of hours after which overtime begins.",
      "Set the overtime multiplier and review regular, overtime, and total gross pay."
    ],
    howItWorks: "Hours up to the selected threshold are multiplied by the normal hourly rate. Hours above the threshold are multiplied by the hourly rate and the overtime multiplier, then both amounts are added together.",
    example: "At $22 per hour with 46 total hours, a 40-hour threshold, and a 1.5× multiplier, 40 hours are regular and 6 hours are overtime.",
    tips: [
      "A 1.5× multiplier is a common overtime assumption, but rules vary.",
      "Some employers calculate overtime by day, shift, or other rules rather than only weekly hours.",
      "Gross pay is before taxes and other deductions.",
      "Use your employer's actual overtime policy for payroll decisions."
    ],
    faqs: [
      { question: "How is overtime pay calculated?", answer: "A simple overtime calculation multiplies overtime hours by the regular hourly rate and an overtime multiplier." },
      { question: "What is time-and-a-half?", answer: "Time-and-a-half means an overtime multiplier of 1.5 times the normal hourly rate." },
      { question: "Is overtime always after 40 hours?", answer: "Not necessarily. The applicable rule can depend on the employer, job, schedule, and jurisdiction." },
      { question: "Does overtime pay mean take-home pay?", answer: "No. The calculator estimates gross pay before taxes and other deductions." }
    ],
    related: [
      { title: "Time Card Calculator", href: "/calculators/time-card-calculator", description: "Total a full workweek." },
      { title: "Hours Worked Calculator", href: "/calculators/hours-worked-calculator", description: "Calculate shift length." },
      { title: "Paycheck Calculator", href: "/calculators/paycheck-calculator", description: "Estimate pay after deductions." }
    ]
  },
  "discount-calculator": {
    title: "Discount Calculator",
    intro: "A discount calculator quickly shows how much you save and what a sale price becomes after a percentage discount. You can also add a sales tax estimate after the discount.",
    steps: [
      "Enter the original price.",
      "Enter the discount percentage.",
      "Optionally enter a sales tax rate to estimate the final price after tax.",
      "Review the savings, discounted price, and final price."
    ],
    howItWorks: "The discount amount is the original price multiplied by the discount percentage. Subtracting that amount from the original price gives the sale price. If tax is entered, the calculator applies the tax to the discounted price.",
    example: "A $80 item with a 15% discount saves $12, leaving a $68 price before any optional sales tax.",
    tips: [
      "A percentage discount is applied to the original price in this calculator.",
      "Sales tax can vary by location and may not apply to every item.",
      "Multiple promotions can have different rules, so check the store's terms.",
      "Compare the final price rather than only the advertised percentage."
    ],
    faqs: [
      { question: "How do I calculate a discount?", answer: "Multiply the original price by the discount percentage to find the savings, then subtract the savings from the original price." },
      { question: "What is 20% off $100?", answer: "A 20% discount saves $20, so the price after discount is $80 before tax." },
      { question: "Is sales tax calculated before or after the discount?", answer: "This calculator applies the optional tax rate to the discounted price." },
      { question: "Can I calculate multiple discounts?", answer: "You can run the calculator repeatedly, but sequential discounts are not always the same as adding the percentages together." }
    ],
    related: [
      { title: "Sales Tax Calculator", href: "/calculators/sales-tax-calculator", description: "Calculate tax and total price." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Work out percentages and changes." },
      { title: "Tip Calculator", href: "/calculators/tip-calculator", description: "Calculate a tip and split a bill." }
    ]
  },
  "percentage-calculator": {
    title: "Percentage Calculator",
    intro: "Percentages are useful for discounts, increases, comparisons, and everyday math. This calculator shows a percentage of a number and percentage change between an old and new value.",
    steps: [
      "Enter the percentage you want to calculate and the number it applies to.",
      "Enter an old value and a new value if you want percentage change.",
      "Review the percentage result and percentage-change result.",
      "Use the result to compare prices, quantities, rates, or other values."
    ],
    howItWorks: "A percentage of a number is calculated as percentage ÷ 100 × number. Percentage change is calculated as (new value − old value) ÷ old value × 100, when the old value is not zero.",
    example: "20% of 85 is 17. If a value rises from 100 to 120, the percentage change is 20%.",
    tips: [
      "Percentage change and percentage points are not the same thing.",
      "A negative percentage change means the new value is lower than the old value.",
      "Percentage change cannot be calculated normally from an old value of zero.",
      "Round results only after the calculation when precision matters."
    ],
    faqs: [
      { question: "How do I find a percentage of a number?", answer: "Convert the percentage to a decimal and multiply it by the number." },
      { question: "How do I calculate percentage increase?", answer: "Subtract the old value from the new value, divide by the old value, and multiply by 100." },
      { question: "What is percentage change?", answer: "It measures how much a value has increased or decreased relative to its starting value." },
      { question: "What happens if the old value is zero?", answer: "Standard percentage-change math uses the old value as the denominator, so a normal percentage change is undefined when the starting value is zero." }
    ],
    related: [
      { title: "Discount Calculator", href: "/calculators/discount-calculator", description: "Apply a percentage discount." },
      { title: "Sales Tax Calculator", href: "/calculators/sales-tax-calculator", description: "Apply a percentage tax rate." },
      { title: "Salary Calculator", href: "/calculators/salary-calculator", description: "Compare pay amounts." }
    ]
  },
  "tip-calculator": {
    title: "Tip Calculator",
    intro: "A tip calculator makes restaurant bill math simple by calculating the tip, total bill, and amount each person pays when splitting the bill.",
    steps: [
      "Enter the bill amount before the tip.",
      "Choose the tip percentage you want to leave.",
      "Enter the number of people sharing the bill.",
      "Review the tip, total, and per-person amount."
    ],
    howItWorks: "The tip amount is the bill multiplied by the selected tip percentage. The total is the bill plus the tip, and the per-person amount is the total divided by the number of people.",
    example: "For a $75 bill and a 20% tip, the tip is $15 and the total is $90. Split between two people, that is $45 per person.",
    tips: [
      "Decide whether you want to tip on the pre-tax or after-tax amount based on your preference and local practice.",
      "Check the bill for an already-added service charge or gratuity.",
      "Rounding the final per-person amount can make splitting easier.",
      "Tip expectations vary by location and service, so use the percentage you are comfortable with."
    ],
    faqs: [
      { question: "How much should I tip?", answer: "There is no universal percentage. Tip expectations vary by location, service, and situation, so choose a rate that fits the context." },
      { question: "Does this calculator split the bill?", answer: "Yes. Enter the number of people to see an estimated equal share of the total." },
      { question: "Does the tip include tax?", answer: "The calculator applies the tip percentage to the bill amount you enter. You can choose whether your bill input represents the amount before or after tax." },
      { question: "Can I use it for a large group?", answer: "Yes. Enter the number of people sharing the bill." }
    ],
    related: [
      { title: "Discount Calculator", href: "/calculators/discount-calculator", description: "Calculate savings on a purchase." },
      { title: "Sales Tax Calculator", href: "/calculators/sales-tax-calculator", description: "Estimate sales tax and total." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Calculate any percentage quickly." }
    ]
  },
  "sales-tax-calculator": {
    title: "Sales Tax Calculator",
    intro: "Sales tax can turn a listed price into a different checkout total. This calculator lets you enter a purchase amount and a combined tax rate to estimate the tax and final price.",
    steps: [
      "Enter the purchase price before sales tax.",
      "Enter the combined sales tax rate you want to use.",
      "Review the calculated sales tax.",
      "Check the final price including tax."
    ],
    howItWorks: "Sales tax is calculated by multiplying the purchase amount by the tax rate divided by 100. The tax is then added to the purchase amount to get the estimated total.",
    example: "At an 8.25% tax rate, a $100 purchase has $8.25 in sales tax and an estimated total of $108.25.",
    tips: [
      "US sales tax varies by state, county, city, and sometimes special districts.",
      "Use the combined rate that applies to the purchase location.",
      "Some products and services can be exempt or taxed differently.",
      "The calculator does not automatically look up your local tax rate."
    ],
    faqs: [
      { question: "How do I calculate sales tax?", answer: "Multiply the purchase price by the sales tax rate as a decimal, then add the tax to the purchase price." },
      { question: "Does this calculator know my local tax rate?", answer: "No. Enter the combined rate you want to use because rates vary by jurisdiction." },
      { question: "Why can sales tax differ between two nearby locations?", answer: "Local jurisdictions can add their own taxes on top of state or other applicable rates." },
      { question: "Can I use this before shopping?", answer: "Yes. Enter the advertised price and a local tax rate to estimate the amount you may pay at checkout." }
    ],
    related: [
      { title: "Discount Calculator", href: "/calculators/discount-calculator", description: "See a sale price and savings." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Work with percentage rates." },
      { title: "Tip Calculator", href: "/calculators/tip-calculator", description: "Calculate tips and split bills." }
    ]
  },
  "age-calculator": {
    title: "Age Calculator",
    intro: "An age calculator finds the difference between two dates and expresses it in years, months, and days. You can also see the total number of days between the dates.",
    steps: [
      "Enter the date of birth or starting date.",
      "Choose the date on which you want to calculate the age.",
      "Review the exact years, months, and days.",
      "Use the total-days result when you need the full elapsed-day count."
    ],
    howItWorks: "The calculator compares the year, month, and day components of the two dates and adjusts for month boundaries. It also calculates the total elapsed days between the dates.",
    example: "If a person was born on January 1, 2000, entering a later date gives an age expressed as completed years, months, and days rather than only an approximate number of years.",
    tips: [
      "Use the exact date of birth for the most precise result.",
      "Age in years is not the same as simply dividing total days by 365.",
      "For legal or official purposes, confirm the applicable date rules with the relevant authority.",
      "You can set the second date to a future or past date for planning and date comparisons."
    ],
    faqs: [
      { question: "How is exact age calculated?", answer: "Exact age compares the birth date with the target date and counts completed years, months, and remaining days." },
      { question: "Does a leap year matter?", answer: "Yes. Calendar dates and the number of days in each month affect the exact date difference." },
      { question: "Can I calculate age on a future date?", answer: "Yes. Choose the future date in the Age on field." },
      { question: "Is age calculated from total days divided by 365?", answer: "No. The exact age display uses calendar years, months, and days rather than a simple 365-day approximation." }
    ],
    related: [
      { title: "Time Calculator", href: "/calculators/time-calculator", description: "Add or subtract time durations." },
      { title: "Hours Worked Calculator", href: "/calculators/hours-worked-calculator", description: "Calculate elapsed work time." },
      { title: "Unit Converter", href: "/calculators/unit-converter", description: "Convert common measurement units." }
    ]
  },
  "unit-converter": {
    title: "Unit Converter",
    intro: "A unit converter makes it easy to switch between common US and metric measurements. POSLATOR currently supports everyday conversions for length, weight, temperature, and volume.",
    steps: [
      "Choose a measurement category such as length, weight, temperature, or volume.",
      "Enter the value you want to convert.",
      "Choose the starting unit and the unit you want to convert to.",
      "Review the converted value and repeat with another pair when needed."
    ],
    howItWorks: "The calculator uses standard conversion factors for supported units. Temperature uses the appropriate Fahrenheit-to-Celsius or Celsius-to-Fahrenheit formula, while other categories use fixed unit relationships.",
    example: "One mile equals 1.609344 kilometers, so entering 1 mile and converting to kilometers gives 1.6093 when rounded to four decimal places.",
    tips: [
      "Check the category before choosing units so the conversion is meaningful.",
      "Rounding is displayed for readability and can differ slightly from an unrounded value.",
      "For engineering, laboratory, or regulated work, verify the required unit standard and precision.",
      "Use the converter for common everyday measurements supported by the tool."
    ],
    faqs: [
      { question: "What units can I convert?", answer: "The current tool supports common length, weight, temperature, and volume units, including miles, kilometers, feet, meters, inches, centimeters, pounds, kilograms, Fahrenheit, Celsius, cups, and gallons." },
      { question: "How accurate are the conversions?", answer: "The tool uses standard conversion factors and displays the result to four decimal places before trimming unnecessary zeros." },
      { question: "Does 1 mile always equal 1.609344 kilometers?", answer: "Yes, for the standard international mile-to-kilometer conversion used by this tool." },
      { question: "Can I convert Fahrenheit to Celsius?", answer: "Yes. Select Temperature, then choose Fahrenheit and Celsius." }
    ],
    related: [
      { title: "Age Calculator", href: "/calculators/age-calculator", description: "Calculate exact age between dates." },
      { title: "Time Calculator", href: "/calculators/time-calculator", description: "Work with hours and minutes." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Calculate percentage values." }
    ]
  },
  "time-calculator": {
    title: "Time Calculator",
    intro: "Use a time calculator when you need to add or subtract durations expressed as hours and minutes. It is useful for schedules, elapsed time, planning, and everyday time math.",
    steps: [
      "Enter the hours and minutes for the first duration.",
      "Choose whether you want to add or subtract.",
      "Enter the hours and minutes for the second duration.",
      "Review the result in hours and minutes and as decimal hours."
    ],
    howItWorks: "The calculator converts both durations to total minutes, performs the selected operation, and converts the result back to hours and minutes. Decimal hours are total minutes divided by 60.",
    example: "2 hours 45 minutes plus 1 hour 30 minutes equals 4 hours 15 minutes, or 4.25 decimal hours.",
    tips: [
      "60 minutes equals one hour, so the calculator automatically carries minutes into hours.",
      "Subtraction is limited to a non-negative duration in this tool.",
      "Use the decimal result when a form or timesheet asks for decimal hours.",
      "For clock times across midnight, the Hours Worked Calculator is a better fit."
    ],
    faqs: [
      { question: "How do I add hours and minutes?", answer: "Add the durations and carry every 60 minutes into one hour. The calculator handles that conversion automatically." },
      { question: "How do I convert 15 minutes to decimal hours?", answer: "Divide 15 by 60, which gives 0.25 hours." },
      { question: "Can I subtract one duration from another?", answer: "Yes. Select Subtract and enter the two durations." },
      { question: "Can it calculate a shift between two clock times?", answer: "For start and end clock times, use the Hours Worked Calculator, which is designed for elapsed shifts and breaks." }
    ],
    related: [
      { title: "Hours Worked Calculator", href: "/calculators/hours-worked-calculator", description: "Calculate elapsed shift time." },
      { title: "Time Card Calculator", href: "/calculators/time-card-calculator", description: "Track a full workweek." },
      { title: "Age Calculator", href: "/calculators/age-calculator", description: "Compare calendar dates." }
    ]
  },
  "loan-calculator": {
    title: "Loan Calculator",
    intro: "A loan calculator helps you estimate the regular payment and total interest for a fixed-rate loan. Change the loan amount, rate, or term to compare different borrowing scenarios.",
    steps: ["Enter the amount you plan to borrow.", "Enter the annual interest rate.", "Enter the loan term in months.", "Review the monthly payment, total payments, and total interest."],
    howItWorks: "The calculator uses the standard fixed-rate loan payment formula. The interest rate is converted to a monthly rate and applied across the number of monthly payments.",
    example: "A $25,000 loan at 7% for 60 months produces an estimated monthly payment and shows how much of the total cost is interest.",
    tips: ["A longer term can lower the monthly payment but usually increases total interest.", "Compare APR and fees, not only the advertised interest rate.", "Actual lender payments can differ because of fees or other charges.", "Use the result for planning rather than as a loan offer."],
    faqs: [
      { question: "How is a loan payment calculated?", answer: "For a fixed-rate loan, the payment depends on the principal, monthly interest rate, and number of payments." },
      { question: "Does a longer loan term cost more?", answer: "Usually. A longer term spreads payments over more months and generally results in more total interest." },
      { question: "Does this include loan fees?", answer: "No. The calculator focuses on principal and interest unless costs are reflected in the amount borrowed." }
    ],
    related: [
      { title: "Amortization Calculator", href: "/calculators/amortization-calculator", description: "See payment and interest over a loan." },
      { title: "Car Loan Calculator", href: "/calculators/car-loan-calculator", description: "Estimate a vehicle loan payment." },
      { title: "Mortgage Calculator", href: "/calculators/mortgage-calculator", description: "Estimate a home loan payment." }
    ]
  },
  "car-loan-calculator": {
    title: "Car Loan Calculator",
    intro: "Estimate a vehicle loan payment from the car price, down payment, trade-in value, interest rate, and term. It is designed for quick car-buying comparisons.",
    steps: ["Enter the vehicle price.", "Add your down payment and trade-in value.", "Enter the interest rate and loan term.", "Review the amount financed, monthly payment, and total interest."],
    howItWorks: "The calculator subtracts the down payment and trade-in value from the vehicle price to estimate the amount financed, then applies a standard fixed-rate loan payment formula.",
    example: "For a $30,000 vehicle with $5,000 down and a $7,000 rate over 60 months, the result shows an estimated payment based on the amount financed.",
    tips: ["Taxes and dealer fees can increase the amount you actually finance.", "A larger down payment reduces the financed balance.", "Compare the total cost of financing, not just the monthly payment.", "Insurance and ownership costs are separate from the loan payment."],
    faqs: [
      { question: "Does the calculator include a trade-in?", answer: "Yes. Enter the trade-in value you expect to apply toward the vehicle." },
      { question: "Are taxes included?", answer: "No. Add applicable taxes and fees to your vehicle price or financing amount when planning." },
      { question: "Can I compare 48 and 60 month loans?", answer: "Yes. Change the term to compare the payment and total interest." }
    ],
    related: [
      { title: "Car Affordability Calculator", href: "/calculators/car-affordability-calculator", description: "Estimate a comfortable car budget." },
      { title: "Loan Calculator", href: "/calculators/loan-calculator", description: "Compare general loan scenarios." },
      { title: "Investment Calculator", href: "/calculators/investment-calculator", description: "Project long-term investment growth." }
    ]
  },
  "compound-interest-calculator": {
    title: "Compound Interest Calculator",
    intro: "Compound interest can make savings grow because returns are added to the balance and can themselves earn returns. This calculator also models regular monthly contributions.",
    steps: ["Enter your starting balance.", "Enter a monthly contribution.", "Enter an annual interest rate and time period.", "Choose how often interest compounds and review the projected value."],
    howItWorks: "The calculator compounds the starting balance and recurring contributions at the selected frequency. It then separates the projected ending balance into contributions and estimated interest.",
    example: "Starting with $10,000, adding $300 each month, and assuming a 7% annual rate for 10 years illustrates how regular contributions and compounding can work together.",
    tips: ["The assumed rate is not guaranteed.", "Fees and taxes can reduce real-world returns.", "Small changes in the rate or time horizon can have a large effect over long periods.", "Use multiple scenarios rather than relying on one projection."],
    faqs: [
      { question: "What is compound interest?", answer: "It is interest calculated on the original balance plus previously accumulated interest." },
      { question: "Do monthly contributions matter?", answer: "Yes. Regular contributions add new money that can also participate in future growth." },
      { question: "Is the projected result guaranteed?", answer: "No. It is a mathematical projection based on the rate you enter." }
    ],
    related: [
      { title: "Investment Calculator", href: "/calculators/investment-calculator", description: "Project a potential investment balance." },
      { title: "Loan Calculator", href: "/calculators/loan-calculator", description: "Estimate borrowing costs." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Work with percentages quickly." }
    ]
  },
  "investment-calculator": {
    title: "Investment Calculator",
    intro: "An investment calculator can help you visualize how an initial amount and regular contributions might grow over time under an assumed annual return.",
    steps: ["Enter your initial investment.", "Enter the amount you expect to contribute each month.", "Enter an assumed annual return.", "Choose the time horizon and review the projected value."],
    howItWorks: "The projection compounds the assumed monthly return over the selected number of months and adds the future value of recurring monthly contributions.",
    example: "An initial $10,000 investment with $500 added each month at an assumed 8% annual return over 20 years shows the potential effect of time and consistent contributions.",
    tips: ["Investment returns are uncertain and can be negative.", "Taxes, fees, inflation, and account rules can affect actual results.", "Do not treat a projection as a promise of future performance.", "Compare conservative and optimistic assumptions."],
    faqs: [
      { question: "What return should I enter?", answer: "Use an assumption appropriate for the type of investment and your planning scenario. Consider testing several rates." },
      { question: "Does this account for inflation?", answer: "No. The displayed value is a nominal projection and does not subtract inflation." },
      { question: "Are market losses included?", answer: "The calculator uses a constant assumed return, so it does not model year-to-year market volatility." }
    ],
    related: [
      { title: "Compound Interest Calculator", href: "/calculators/compound-interest-calculator", description: "See how compounding affects growth." },
      { title: "Salary Calculator", href: "/calculators/salary-calculator", description: "Convert income between pay periods." },
      { title: "Take Home Pay Calculator", href: "/calculators/take-home-pay-calculator", description: "Estimate income after deductions." }
    ]
  },
  "bmi-calculator": {
    title: "BMI Calculator",
    intro: "BMI, or body mass index, is a screening measure based on height and weight. This version uses pounds and feet/inches for a quick adult BMI estimate.",
    steps: ["Enter your height in feet and inches.", "Enter your weight in pounds.", "Review the calculated BMI.", "Use the category as general screening information, not a diagnosis."],
    howItWorks: "For US customary units, BMI is calculated as weight in pounds multiplied by 703, divided by height in inches squared.",
    example: "For an adult who is 5 feet 10 inches tall and weighs 180 pounds, the calculator returns a BMI and the corresponding standard adult category.",
    tips: ["BMI does not directly measure body fat.", "Muscle mass, age, body composition, and other factors can affect interpretation.", "BMI categories are intended as screening ranges for adults.", "For children and teens, BMI interpretation uses age- and sex-specific growth charts."],
    faqs: [
      { question: "What does BMI stand for?", answer: "BMI stands for body mass index, a screening measure based on height and weight." },
      { question: "Is BMI a diagnosis?", answer: "No. BMI is a screening measure and should be interpreted alongside other health information." },
      { question: "Can this calculator be used for children?", answer: "The standard adult categories shown here are not intended for children. Children and teens require age- and sex-specific interpretation." }
    ],
    related: [
      { title: "Age Calculator", href: "/calculators/age-calculator", description: "Calculate exact age from dates." },
      { title: "Percentage Calculator", href: "/calculators/percentage-calculator", description: "Calculate percentages and changes." },
      { title: "Unit Converter", href: "/calculators/unit-converter", description: "Convert common measurements." }
    ]
  },
  "date-calculator": {
    title: "Date Calculator",
    intro: "Use the date calculator to find the number of calendar days between two dates, with quick conversions to weeks and approximate months.",
    steps: ["Choose the start date.", "Choose the end date.", "Review the number of calendar days.", "Use the week and approximate month figures for planning."],
    howItWorks: "The calculator subtracts the start date from the end date and converts the elapsed time into days. Weeks are days divided by seven, while the month value uses an average month length.",
    example: "Entering January 1 and December 31 returns the elapsed calendar-day count for that date range and equivalent week and approximate month values.",
    tips: ["The end date is treated as the second calendar date, not an additional full day.", "Months are approximate because calendar months have different lengths.", "For contracts or deadlines, check whether the relevant rule counts the start or end date.", "Use a calendar or official source when a legal deadline depends on a specific counting rule."],
    faqs: [
      { question: "Does the calculator count the start date?", answer: "It calculates elapsed days between the two calendar dates, so the difference between the same date and the next date is one day." },
      { question: "Why are months approximate?", answer: "Calendar months range from 28 to 31 days, so a single exact day-to-month conversion is not always possible." },
      { question: "Can I use it for legal deadlines?", answer: "Use it as a planning aid only. Legal and contractual deadlines can use special counting rules." }
    ],
    related: [
      { title: "Age Calculator", href: "/calculators/age-calculator", description: "Calculate years, months and days." },
      { title: "Time Calculator", href: "/calculators/time-calculator", description: "Add or subtract hours and minutes." },
      { title: "Hours Worked Calculator", href: "/calculators/hours-worked-calculator", description: "Calculate elapsed work time." }
    ]
  }
};
