import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPromoBar from "@/components/FloatingPromoBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { WebsiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "AI Think Tank — Free AI Learning for Kids, Teens & Pros",
    template: "%s | AI Think Tank",
  },
  description:
    "51 free guides + 24 interactive tools to learn AI — for curious kids, ambitious teens, and busy professionals. No jargon, no signup wall. Updated daily.",
  keywords: [
    "AI for kids",
    "AI for teens",
    "AI for beginners",
    "learn AI",
    "artificial intelligence education",
    "AI tools for students",
    "AI for business",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aithinktank.space",
    siteName: "AI Think Tank",
    title: "AI Think Tank — Free AI Learning for Kids, Teens & Pros",
    description:
      "51 free guides + 24 interactive tools to learn AI — for kids, teens, and professionals. No jargon, no signup wall. Updated daily.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI Think Tank — Free AI learning for kids, teens, and professionals. 51 guides, 24 tools.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Think Tank — Free AI Learning",
    description:
      "51 free guides + 24 interactive tools. AI for kids, teens, and professionals. No jargon, no signup wall.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.aithinktank.space",
  },
  metadataBase: new URL("https://www.aithinktank.space"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <GoogleAnalytics />
        <WebsiteJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingPromoBar />
      </body>
    </html>
  );
}
