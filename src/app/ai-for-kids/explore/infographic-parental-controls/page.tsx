import { Metadata } from "next";
import InfographicParentalControls from "@/components/interactives/InfographicParentalControls";

export const metadata: Metadata = {
  title: "Parental Controls for AI Apps | Safety Guide for Parents",
  description: "Complete guide to parental controls on ChatGPT, Google, Alexa, and learning apps. Screen time limits and content filters.",
};

export default function ParentalControlsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF]">
      <InfographicParentalControls />
    </div>
  );
}
