import type { Metadata } from "next";
import InfographicAICulture from "@/components/interactives/InfographicAICulture";

export const metadata: Metadata = {
  title: "Building an AI-First Culture | Infographic",
  description:
    "Visual guide to transforming AI adoption from top-down mandate to natural behavior. Three phases, addressing concerns, and a 90-day roadmap for cultural change.",
  openGraph: {
    title: "AI-First Culture - Interactive Infographic",
    description:
      "Build a culture where employees naturally want to experiment with AI. Proven strategies, not mandates.",
    type: "website",
  },
};

export default function InfographicAICulturePage() {
  return <InfographicAICulture />;
}
