import { Metadata } from "next";
import InfographicHomeworkHelp from "@/components/interactives/InfographicHomeworkHelp";

export const metadata: Metadata = {
  title: "AI Homework Help for Kids | Interactive Infographic",
  description: "Learn how to use AI tools like ChatGPT and Khan Academy for homework without cheating. Visual guide for parents and students.",
};

export default function HomeworkHelpPage() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF]">
      <InfographicHomeworkHelp />
    </div>
  );
}
