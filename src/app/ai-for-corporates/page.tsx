import type { Metadata } from "next";
import HubPage from "@/components/HubPage";

export const metadata: Metadata = {
  title: "AI for Corporates — AI, Without the Jargon",
  description:
    "Understand AI in plain English. Practical AI guidance for non-technical professionals and business leaders. Real frameworks, case studies, and ROI-focused strategies.",
  keywords: [
    "AI for business",
    "AI for professionals",
    "AI strategy corporate",
    "AI adoption business",
    "AI ROI",
    "AI without jargon",
  ],
};

export default function AIForCorporatesPage() {
  return <HubPage category="ai-for-corporates" />;
}
