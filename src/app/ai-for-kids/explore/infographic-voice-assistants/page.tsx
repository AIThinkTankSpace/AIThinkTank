import { Metadata } from "next";
import InfographicVoiceAssistants from "@/components/interactives/InfographicVoiceAssistants";

export const metadata: Metadata = {
  title: "Voice Assistants for Kids | Alexa, Google, Siri Safety Guide",
  description: "Is it safe for kids to use Alexa, Google Assistant, and Siri? Privacy concerns, benefits, and parental controls explained.",
};

export default function VoiceAssistantsPage() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFF9F0] to-[#F5E6FF]">
      <InfographicVoiceAssistants />
    </div>
  );
}
