import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Raut | AI Engineer",
  description: "AI Engineer specializing in Generative AI, Agentic Systems, RAG Pipelines and Reinforcement Learning.",
};

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
