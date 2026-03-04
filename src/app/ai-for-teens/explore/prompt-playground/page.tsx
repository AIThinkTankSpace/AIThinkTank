import type { Metadata } from "next";
import PromptPlayground from "@/components/interactives/PromptPlayground";

export const metadata: Metadata = {
  title: "Prompt Engineering Playground | AI for Teens",
  description:
    "Learn prompt engineering with interactive challenges. Master techniques like context, specificity, role-setting, and more to get better AI responses.",
  openGraph: {
    title: "Prompt Engineering Playground",
    description: "Learn how to craft better prompts and get amazing AI responses",
    type: "website",
  },
};

export default function PromptPlaygroundPage() {
  return <PromptPlayground />;
}
