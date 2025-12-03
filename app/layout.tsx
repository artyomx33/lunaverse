import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GlowCardInit } from "@/components/GlowCardInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luna-Verse OS for Real-World Domination™ | 3-Day Master Experience",
  description:
    "Out-execute entire teams in 3 days. €4998. Beast Mode activated. AI weaponization + brutal clarity + real-world domination OS.",
  keywords: [
    "AI mastery",
    "business acceleration",
    "CEO coaching",
    "Claude GPT workflow",
    "real-world domination",
    "brutal clarity system",
  ],
  openGraph: {
    title: "Luna-Verse OS™ | Out-Execute Entire Teams",
    description:
      "3-day live experience. Shatter old thinking. Install brutal clarity. Become the system.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <GlowCardInit />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
