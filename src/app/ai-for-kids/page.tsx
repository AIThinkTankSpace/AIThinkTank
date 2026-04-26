import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Kids: Safe, Free Learning for Ages 6–12",
  description:
    "17 parent-approved AI guides + 8 interactive activities for kids 6–12. Is ChatGPT safe? How does AI learn? Explore AI together — free, no signup.",
  keywords: [
    "AI for kids",
    "artificial intelligence for children",
    "is ChatGPT safe for kids",
    "AI for children",
    "how to explain AI to kids",
    "AI activities for kids",
    "AI tools for children",
    "teach kids about AI",
  ],
};

export default function AIForKidsPage() {
  return <HubPage category="ai-for-kids" />;
}
