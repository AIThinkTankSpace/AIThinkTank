import { Metadata } from "next";
import InfographicCollegeApps from "@/components/interactives/InfographicCollegeApps";

export const metadata: Metadata = {
  title: "AI for College Essays & Applications | AI for Teens",
  description: "Visual guide to using AI ethically in college essays and applications. Learn the difference between smart AI use and plagiarism.",
};

export default function CollegeAppsPage() {
  return <InfographicCollegeApps />;
}
