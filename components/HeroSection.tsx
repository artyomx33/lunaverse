"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background with hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.webp"
          alt="Luna-Verse OS Hero Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Gradient overlay - reduced opacity to let image show more */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-70" />

      {/* Glowing accent */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center h-full flex flex-col justify-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Out-Execute
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Entire Teams
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
          Most operators are drowning. You're not most operators.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          You need a different operating system—one designed by someone who runs 7-figure businesses using nothing but Claude, GPT, brutal clarity, and ruthless execution. 3 days to install it. Limited to 6 people per cohort.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button variant="primary" className="text-lg px-8 py-4">
            Apply Now (€4,998)
          </Button>
        </div>

        {/* Microcopy */}
        <p className="text-sm text-yellow-400 font-semibold mb-4">
          If this price feels like a lot, you're not ready.
        </p>
        <p className="text-xs text-gray-600 italic">
          If it doesn't, we'll review your application within 48 hours.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-center">
        <svg
          className="w-6 h-6 text-yellow-400 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
      </div>
    </section>
  );
}
