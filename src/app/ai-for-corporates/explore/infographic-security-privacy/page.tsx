import type { Metadata } from "next";
import InfographicSecurityPrivacy from "@/components/interactives/InfographicSecurityPrivacy";

export const metadata: Metadata = {
  title: "AI Security & Data Privacy for Business Leaders | Infographic",
  description:
    "Visual guide to managing AI security risks and data privacy. Five real risks, practical frameworks, and actionable checklists for responsible AI adoption.",
  openGraph: {
    title: "AI Security & Data Privacy - Interactive Infographic",
    description:
      "Protect your company from AI security risks without paranoia. Practical risk management that enables responsible adoption.",
    type: "website",
  },
};

export default function InfographicSecurityPrivacyPage() {
  return <InfographicSecurityPrivacy />;
}
