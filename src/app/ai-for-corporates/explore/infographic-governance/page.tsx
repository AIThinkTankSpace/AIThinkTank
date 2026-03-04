import type { Metadata } from "next";
import InfographicGovernance from "@/components/interactives/InfographicGovernance";

export const metadata: Metadata = {
  title: "AI Governance Framework for Small Businesses | Infographic",
  description:
    "Visual guide to building lightweight AI governance that enables scale without bureaucracy. Four pillars, 90-day roadmap, and practical implementation.",
  openGraph: {
    title: "AI Governance Framework - Interactive Infographic",
    description:
      "Build governance that protects while enabling rapid AI adoption. Simple, practical, proven.",
    type: "website",
  },
};

export default function InfographicGovernancePage() {
  return <InfographicGovernance />;
}
