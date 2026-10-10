import { notFound } from "next/navigation";
import UtilityToolClient from "@/components/UtilityToolClient";
import { utilityTools, getUtilityTool } from "@/components/utilityTools";

export function generateStaticParams() { return utilityTools.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getUtilityTool(slug);
  if (!tool) return { title: "Tool Not Found" };
  return { title: `${tool.title} – Free Online Tool`, description: `${tool.description} Free to use with no signup on POSLATOR.`, alternates: { canonical: `/tools/${tool.slug}` }, openGraph: { title: `${tool.title} | POSLATOR`, description: tool.description, url: `https://www.poslator.com/tools/${tool.slug}`, type: "website" } };
}
export default async function UtilityToolPage({ params }) {
  const { slug } = await params;
  const tool = getUtilityTool(slug);
  if (!tool) notFound();
  return <UtilityToolClient tool={tool} />;
}
