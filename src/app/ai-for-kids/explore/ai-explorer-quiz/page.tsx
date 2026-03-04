import type { Metadata } from "next";
import AIExplorerQuiz from "@/components/interactives/AIExplorerQuiz";

export const metadata: Metadata = {
  title: "AI Explorer Quiz | AI for Kids",
  description:
    "Discover what kind of AI Explorer you are! Take our fun personality quiz designed for kids ages 6-12.",
  openGraph: {
    title: "What Kind of AI Explorer Are You?",
    description: "Take the AI Explorer Quiz and find out your AI personality!",
    type: "website",
  },
};

export default function AIExplorerQuizPage() {
  return <AIExplorerQuiz />;
}
