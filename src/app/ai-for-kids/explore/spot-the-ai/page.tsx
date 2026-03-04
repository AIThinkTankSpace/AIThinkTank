import type { Metadata } from "next";
import SpotTheAI from "@/components/interactives/SpotTheAI";

export const metadata: Metadata = {
  title: "Spot the AI | AI for Kids",
  description:
    "Interactive game where kids tap items to identify which ones use AI. Learn about AI in everyday objects and apps!",
  openGraph: {
    title: "Spot the AI - Interactive Game",
    description:
      "Can you find all the items that use AI? Tap and discover which everyday things use artificial intelligence.",
    type: "website",
  },
};

export default function SpotTheAIPage() {
  return <SpotTheAI />;
}
