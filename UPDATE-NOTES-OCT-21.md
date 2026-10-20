# POSLATOR update — October 21, 2026

## Fix for Resume Maker 404
- Restores `/tools/resume-maker` in the shared utility registry so static route generation, metadata, the tools directory, and sitemap all include it.
- Includes the Resume Builder client component and its styles.

## New calculators
- `/calculators/inflation-calculator`
- `/calculators/rent-vs-buy-calculator`
- `/calculators/fuel-cost-calculator`
- `/calculators/credit-card-payoff-calculator`
- `/calculators/body-fat-calculator`
- All five are included in the calculator directory and sitemap through the shared registry.

Run `npm ci` and `npm run build` before pushing. Test the routes locally and after the Vercel deployment is marked Ready. Calculator outputs are estimates and include on-page limitations.
