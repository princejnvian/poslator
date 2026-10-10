import { utilityTools } from "@/components/utilityTools";
import tools from "@/components/calculatorTools";

const base = "https://www.poslator.com";
const staticPaths = ["/", "/calculators", "/about", "/contact", "/privacy", "/terms", "/disclaimer"];

export default function sitemap() {
  const calculatorPaths = tools.map((tool) => tool[2]);
  const utilityPaths = ["/tools", ...utilityTools.map((tool) => `/tools/${tool.slug}`)];
  const uniquePaths = [...new Set([...staticPaths, ...calculatorPaths, ...utilityPaths])];
  return uniquePaths.map((path) => ({ url: `${base}${path}` }));
}
