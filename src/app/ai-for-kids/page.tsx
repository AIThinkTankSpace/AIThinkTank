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
  openGraph: {
    type: "website",
    url: "https://www.aithinktank.space/ai-for-kids",
    siteName: "AI Think Tank",
    title: "AI for Kids: Safe, Free Learning for Ages 6–12",
    description:
      "17 parent-approved AI guides + 8 interactive activities for kids 6–12. Is ChatGPT safe? How does AI learn? Explore AI together — free, no signup.",
    images: [
      {
        url: "/og-kids.png",
        width: 1200,
        height: 630,
        alt: "AI for Kids — 17 parent-approved guides and 8 interactive activities for ages 6–12.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Kids: Safe, Free Learning for Ages 6–12",
    description:
      "17 parent-approved AI guides + 8 interactive activities for kids 6–12. Free, no signup.",
    images: ["/og-kids.png"],
  },
};

export default function AIForKidsPage() {
  return <HubPage category="ai-for-kids" />;
}
