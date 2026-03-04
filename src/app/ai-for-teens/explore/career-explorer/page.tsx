import type { Metadata } from "next";
import AICareerExplorer from "@/components/interactives/AICareerExplorer";

export const metadata: Metadata = {
  title: "AI Career Explorer | AI for Teens",
  description:
    "Discover your perfect AI career path. Explore 12 AI careers with India-focused education paths, salary ranges, and day-in-the-life insights.",
  openGraph: {
    title: "AI Career Explorer",
    description: "Find your ideal AI career based on your interests and strengths",
    type: "website",
  },
};

export default function CareerExplorerPage() {
  return <AICareerExplorer />;
}
