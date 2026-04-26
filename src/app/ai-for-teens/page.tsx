import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Teens: Study Smarter & Build AI Skills",
  description:
    "17 free AI study guides + 8 interactive tools for teens 13–17. Exam prep, college essays, AI careers — built for students who'll out-skill the rest.",
  keywords: [
    "AI for teens",
    "AI study tools",
    "AI for students",
    "best AI tools for studying",
    "AI career guidance teens",
    "AI tools for JEE NEET",
    "ChatGPT for homework",
    "AI college essay help",
  ],
};

export default function AIForTeensPage() {
  return <HubPage category="ai-for-teens" />;
}
