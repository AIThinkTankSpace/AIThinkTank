import type { Metadata } from "next";
import AIReadinessAssessment from "@/components/interactives/AIReadinessAssessment";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | AI for Corporates",
  description:
    "Evaluate your organization's readiness for AI adoption across 6 key dimensions. Get personalized recommendations based on your assessment results.",
  openGraph: {
    title: "Is Your Organization AI-Ready?",
    description:
      "Take our professional AI Readiness Assessment to identify strengths and improvement areas.",
    type: "website",
  },
};

export default function AIReadinessAssessmentPage() {
  return <AIReadinessAssessment />;
}
