# POSLATOR SEO and Calculator Improvements

## Included in this update
- Homepage metadata updated for the site's calculator intent.
- Homepage search and calculator directory now use the shared calculator registry, so all 64 listed calculators are discoverable in both places.
- Sitemap now derives calculator URLs from the shared registry, includes the seven core static pages, removes duplicate paths, and avoids setting every page's `lastModified` to the current time on each request.
- Added calculator-specific explanations, formulas, worked examples, practical limitations and FAQs for 28 calculator guides that previously used repeated generic copy.
- Expanded the Car Loan Calculator with a financed taxes/fees field, total-of-payments and total-interest results, and a responsive comparison of 36-, 48-, 60-, 72- and 84-month terms.
- Improved the Car Loan and Car Affordability page metadata and the editorial guidance for key pages receiving Search Console impressions.
- Preserved the existing AdSense `public/ads.txt` line.

## Validation
- Confirmed 64 unique calculator routes are listed in the shared calculator registry and every route has a matching `page.js`.
- Parsed all JavaScript files with the installed TypeScript parser; no syntax diagnostics were reported.
- A full Next.js production build was not run in this environment because dependency installation did not complete. Run `npm ci` and `npm run build` locally before pushing.

## Before deploying
1. Unzip this project over a separate copy of your current project (keep a backup).
2. Run `npm ci`.
3. Run `npm run build` and fix any errors before deployment.
4. Test the homepage search, calculator directory, Car Loan Calculator and `/sitemap.xml`.
5. Commit and push to the existing GitHub repository.
