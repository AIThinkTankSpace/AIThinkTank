import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Kids — Explore AI Together",
  description:
    "Give your child a head start in an AI world. Fun, safe, and educational AI content designed for parents and kids to explore together. Free activities, explainers, and projects.",
  keywords: [
    "AI for kids",
    "artificial intelligence for children",
    "how to explain AI to kids",
    "AI activities for kids",
    "AI tools for children",
    "teach kids about AI",
  ],
};

export default function AIForKidsPage() {
  return <HubPage category="ai-for-kids" />;
}
