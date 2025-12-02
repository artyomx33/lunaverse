"use client";

import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90" />
      
      {/* Glowing accent */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Out-Execute
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Entire Teams
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4 leading-relaxed">
          3 days. €4998. Beast Mode activated.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          AI weaponization. Brutal clarity. Real-world domination OS.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button variant="primary" className="text-lg px-8 py-4">
            Join Beta Cohort
          </Button>
        </div>

        {/* Microcopy */}
        <p className="text-sm text-gray-600 italic">
          If €4998 feels like a lot, you're not ready.
          <br />
          If it doesn't, we are.
        </p>
      </div>
    </section>
  );
}
