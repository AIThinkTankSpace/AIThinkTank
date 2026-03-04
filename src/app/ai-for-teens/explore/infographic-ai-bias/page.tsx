import { Metadata } from "next";
import InfographicAIBias from "@/components/interactives/InfographicAIBias";

export const metadata: Metadata = {
  title: "Understanding AI Bias | AI for Teens",
  description: "How AI bias works, why it matters, and what you can do about it. Essential reading for teens interested in AI ethics.",
};

export default function AIBiasPage() {
  return <InfographicAIBias />;
}
