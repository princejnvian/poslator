import CalculatorsDirectory from "@/components/CalculatorsDirectory";

export const metadata = {
  title: "All Calculators – Free Online Tools",
  description:
    "Browse all POSLATOR calculators for work, pay, money, loans, time, percentages, Indian salary, tax and finance calculations, and everyday math.",
  alternates: { canonical: "/calculators" },
};

export default function Calculators() {
  return <CalculatorsDirectory />;
}
