import { Metadata } from "next";
import InfographicBoardExams from "@/components/interactives/InfographicBoardExams";

export const metadata: Metadata = {
  title: "AI Tools for Board Exam Preparation | AI for Teens",
  description: "The best AI tools for CBSE, ICSE, and state board exams. Study smarter with concept explanation, practice, and time management.",
};

export default function BoardExamsPage() {
  return <InfographicBoardExams />;
}
