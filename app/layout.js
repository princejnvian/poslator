import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://poslator.com"),
  title: { default: "POSLATOR — Free Online Calculators & Tools", template: "%s | POSLATOR" },
  description: "Fast, clean online calculators for work, pay, money, time, loans and everyday decisions. No signup required.",
  keywords: ["calculator", "online calculator", "time card calculator", "paycheck calculator", "salary calculator", "mortgage calculator", "tip calculator", "unit converter"],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) { return <html lang="en-US"><body><Header /><main>{children}</main><Footer /></body></html>; }
