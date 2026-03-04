import type { Metadata } from "next";
import HowAILearns from "@/components/interactives/HowAILearns";

export const metadata: Metadata = {
  title: "How AI Learns | AI for Kids",
  description:
    "Interactive step-by-step explainer showing how AI learns through collecting examples, finding patterns, and improving. Perfect for kids ages 6-12.",
  openGraph: {
    title: "How AI Learns - Interactive Explainer",
    description:
      "Discover the 5 steps of how AI learns in this fun, interactive experience.",
    type: "website",
  },
};

export default function HowAILearnsPage() {
  return <HowAILearns />;
}
