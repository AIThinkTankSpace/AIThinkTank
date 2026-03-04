import type { Metadata } from "next";
import UseCaseFinder from "@/components/interactives/UseCaseFinder";

export const metadata: Metadata = {
  title: "AI Use Case Finder | AI for Corporates",
  description:
    "Find relevant AI use cases for your industry and department. Discover implementation difficulty, ROI potential, and real-world examples.",
  openGraph: {
    title: "AI Use Case Finder",
    description:
      "Match your industry and department to discover actionable AI use cases.",
    type: "website",
  },
};

export default function UseCaseFinderPage() {
  return <UseCaseFinder />;
}
