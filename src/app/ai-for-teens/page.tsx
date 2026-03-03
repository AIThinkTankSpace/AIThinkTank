import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Teens — Your AI Advantage",
  description:
    "The skills your school isn't teaching you yet. Free AI tools, study hacks, and career insights for the next generation of innovators. Boost your grades with AI.",
  keywords: [
    "AI for teens",
    "AI study tools",
    "AI for students",
    "best AI tools for studying",
    "AI career guidance teens",
    "AI tools for JEE NEET",
  ],
};

export default function AIForTeensPage() {
  return <HubPage category="ai-for-teens" />;
}
