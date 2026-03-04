import { Metadata } from "next";
import InfographicInternships from "@/components/interactives/InfographicInternships";

export const metadata: Metadata = {
  title: "AI Internships & Competitions for Teens | AI for Teens",
  description: "Get paid to learn AI right now. Real internships, competitions, and opportunities for high school students earning real money.",
};

export default function InternshipsPage() {
  return <InfographicInternships />;
}
