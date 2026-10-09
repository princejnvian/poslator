import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.poslator.com"),
  title: {
    default: "Free Online Calculators for Money, Pay, Time & Math | POSLATOR",
    template: "%s | POSLATOR",
  },
  description: "Use free online calculators for car loans, take-home pay, mortgages, time tracking, percentages and everyday math. Fast results, clear explanations, no signup.",
  applicationName: "POSLATOR",
  creator: "POSLATOR",
  publisher: "POSLATOR",
  openGraph: {
    type: "website",
    url: "https://www.poslator.com/",
    siteName: "POSLATOR",
    title: "Free Online Calculators for Money, Pay, Time & Math | POSLATOR",
    description: "Fast, free calculators for everyday financial, work and math questions. Clear results and explanations, with no signup.",
  },
  twitter: {
    card: "summary",
    title: "Free Online Calculators | POSLATOR",
    description: "Free calculators for money, pay, time, loans and everyday math.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) { return <html lang="en-US"><body><Header /><main>{children}</main><Footer /></body></html>; }
