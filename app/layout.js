import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.poslator.com"),
  title: { default: "POSLATOR — Free Online Calculators & Tools", template: "%s | POSLATOR" },
  description: "Fast, clean online calculators for work, pay, money, time, loans and everyday decisions. No signup required.",
  keywords: ["calculator", "online calculator", "time card calculator", "paycheck calculator", "salary calculator", "mortgage calculator", "loan calculator", "compound interest calculator", "investment calculator", "car loan calculator", "BMI calculator", "date calculator", "tip calculator", "unit converter"],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9015438747151787" />
      </head>
      <body>
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9015438747151787"
          crossOrigin="anonymous"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
