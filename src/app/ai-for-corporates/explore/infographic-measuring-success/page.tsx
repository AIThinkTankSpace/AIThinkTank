import type { Metadata } from "next";
import InfographicMeasuringSuccess from "@/components/interactives/InfographicMeasuringSuccess";

export const metadata: Metadata = {
  title: "How to Measure AI Success in Your Organization | Infographic",
  description:
    "Visual guide to measuring AI success with three-layer framework: adoption, quality, and business impact. Stop guessing, start measuring what matters.",
  openGraph: {
    title: "Measure AI Success - Interactive Infographic",
    description:
      "Three simple metrics—adoption, quality, business impact—that predict real AI success. No complex setup required.",
    type: "website",
  },
};

export default function InfographicMeasuringSuccessPage() {
  return <InfographicMeasuringSuccess />;
}
