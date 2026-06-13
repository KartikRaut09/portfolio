import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getProfileData } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const profile = getProfileData();
  const url = "https://portfolio-o52j.vercel.app";

  return {
    title: `${profile.name} - ${profile.headline.split("·")[0].trim()}`,
    description: profile.subtitle,
    metadataBase: new URL(url),
    openGraph: {
      title: `${profile.name} - AI/ML Engineer`,
      description: profile.subtitle,
      url: url,
      siteName: `${profile.name} Portfolio`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} - AI/ML Engineer`,
      description: profile.subtitle,
    },
  };
}

import { AIAssistant } from "@/components/ui/ai-assistant";
import { RecruiterMode } from "@/components/ui/recruiter-mode";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
        <AIAssistant />
        <RecruiterMode />
      </body>
    </html>
  );
}
