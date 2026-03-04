import type { Metadata } from "next";
import InfographicHRRecruitment from "@/components/interactives/InfographicHRRecruitment";

export const metadata: Metadata = {
  title: "AI for HR, Recruitment & Talent Management | Infographic",
  description:
    "Visual infographic guide to using AI in hiring, skill assessment, and employee development while avoiding bias, legal risks, and ineffective tools.",
  openGraph: {
    title: "AI for HR & Recruitment - Interactive Infographic",
    description:
      "Transform hiring with ethical AI: recruitment screening, skill assessment, employee development, and proven frameworks.",
    type: "website",
  },
};

export default function InfographicHRRecruitmentPage() {
  return <InfographicHRRecruitment />;
}
