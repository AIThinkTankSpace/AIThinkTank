import { Metadata } from "next";
import InfographicCodingForKids from "@/components/interactives/InfographicCodingForKids";

export const metadata: Metadata = {
  title: "How Kids Can Use AI to Learn Coding | Visual Guide",
  description: "AI-powered coding tutorials for kids ages 7-16. Learn Python, JavaScript, and Scratch with ChatGPT and GitHub Copilot.",
};

export default function CodingForKidsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF]">
      <InfographicCodingForKids />
    </div>
  );
}
