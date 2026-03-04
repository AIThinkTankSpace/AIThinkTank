import type { Metadata } from "next";
import JargonDecoder from "@/components/interactives/JargonDecoder";

export const metadata: Metadata = {
  title: "AI Jargon Decoder | AI for Corporates",
  description:
    "Understand AI terminology through real business scenarios and plain-English definitions. Learn AI concepts the way business professionals do.",
  openGraph: {
    title: "AI Jargon Decoder",
    description:
      "Decode AI terminology with real business scenarios and easy-to-understand explanations.",
    type: "website",
  },
};

export default function JargonDecoderPage() {
  return <JargonDecoder />;
}
