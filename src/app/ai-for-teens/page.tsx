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
  openGraph: {
    type: "website",
    url: "https://www.aithinktank.space/ai-for-teens",
    siteName: "AI Think Tank",
    title: "AI for Teens: Study Smarter & Build AI Skills",
    description:
      "17 free AI study guides + 8 interactive tools for teens 13–17. Exam prep, college essays, AI careers — built for students who'll out-skill the rest.",
    images: [
      {
        url: "/og-teens.png",
        width: 1200,
        height: 630,
        alt: "AI for Teens — 17 study guides and 8 interactive tools for ages 13–17. Exam prep, essays, careers.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Teens: Study Smarter & Build AI Skills",
    description:
      "17 free AI study guides + 8 interactive tools for teens 13–17. Exam prep, college essays, AI careers.",
    images: ["/og-teens.png"],
  },
};

export default function AIForTeensPage() {
  return <HubPage category="ai-for-teens" />;
}
