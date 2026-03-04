import type { Metadata } from "next";
import AIReadinessQuiz from "@/components/interactives/AIReadinessQuiz";

export const metadata: Metadata = {
  title: "AI Readiness Quiz | AI for Teens",
  description:
    "Assess your AI skills across 5 dimensions: Knowledge, Tool Usage, Critical Thinking, Ethics Awareness, and Career Readiness. Get personalized learning recommendations.",
  openGraph: {
    title: "How AI-Ready Are You?",
    description: "Take the AI Readiness Quiz and get personalized learning recommendations",
    type: "website",
  },
};

export default function AIReadinessQuizPage() {
  return <AIReadinessQuiz />;
}
