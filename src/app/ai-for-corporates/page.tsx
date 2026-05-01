import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Business: Strategy, ROI & Use Cases",
  description:
    "Why 80% of AI agents fail, real ROI frameworks, and 17 leader-tested guides on AI strategy, governance, and HR. No jargon. No vendor pitch. Free.",
  keywords: [
    "AI for business",
    "AI for professionals",
    "AI strategy corporate",
    "AI adoption business",
    "AI ROI",
    "AI without jargon",
    "enterprise AI use cases",
    "AI governance framework",
  ],
  openGraph: {
    type: "website",
    url: "https://www.aithinktank.space/ai-for-corporates",
    siteName: "AI Think Tank",
    title: "AI for Business: Strategy, ROI & Use Cases",
    description:
      "Why 80% of AI agents fail, real ROI frameworks, and 17 leader-tested guides on AI strategy, governance, and HR. No jargon. No vendor pitch. Free.",
    images: [
      {
        url: "/og-corporates.png",
        width: 1200,
        height: 630,
        alt: "AI for Business — strategy, ROI frameworks, governance. 17 leader-tested guides + 8 tools.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Business: Strategy, ROI & Use Cases",
    description:
      "Why 80% of AI agents fail, real ROI frameworks, and 17 leader-tested guides. No jargon. No vendor pitch.",
    images: ["/og-corporates.png"],
  },
};

export default function AIForCorporatesPage() {
  return <HubPage category="ai-for-corporates" />;
}
