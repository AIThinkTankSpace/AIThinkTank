import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPromoBar from "@/components/FloatingPromoBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { WebsiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "AI Think Tank | Learn AI for Kids, Teens & Professionals",
    template: "%s | AI Think Tank",
  },
  description:
    "Free AI education for everyone. Explore AI through fun activities for kids, study tools for teens, and practical guides for professionals. No jargon, no signup wall.",
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
    title: "AI Think Tank | Learn AI for Kids, Teens & Professionals",
    description:
      "Free AI education for everyone. Fun activities for kids, study tools for teens, and practical guides for professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Think Tank",
    description: "Free AI education for kids, teens, and professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
