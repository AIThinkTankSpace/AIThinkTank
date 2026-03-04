import { Metadata } from "next";
import InfographicLearningApps from "@/components/interactives/InfographicLearningApps";

export const metadata: Metadata = {
  title: "Best AI Learning Apps for Kids | Interactive Comparison",
  description: "Compare Khan Academy, Duolingo, IXL, and more AI-powered learning apps. Find the best fit for your child's learning style.",
};

export default function LearningAppsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF]">
      <InfographicLearningApps />
    </div>
  );
}
