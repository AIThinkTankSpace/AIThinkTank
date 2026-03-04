import { Metadata } from "next";
import InfographicAIPortfolio from "@/components/interactives/InfographicAIPortfolio";

export const metadata: Metadata = {
  title: "Build an AI Portfolio for College | AI for Teens",
  description: "Step-by-step guide to building an AI portfolio that impresses college admissions. Real projects, real impact, real results.",
};

export default function AIPortfolioPage() {
  return <InfographicAIPortfolio />;
}
