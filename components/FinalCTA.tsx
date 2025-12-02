"use client";

import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Break?
        </h2>

        <p className="text-xl text-gray-300 mb-4 leading-relaxed">
          The operating system isn't built by accident.
        </p>

        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          It's installed by choice. By people who refuse to play small. By
          people who see what's possible and build it.
        </p>

        <p className="text-xl font-semibold text-yellow-300 mb-8">
          This is your application.
        </p>

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-xl border border-yellow-400 mb-8">
          <p className="text-sm text-gray-400 mb-4">
            NEXT COHORT: LIMITED TO 6 PEOPLE
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Submit your application below. We'll review and respond within 48
            hours.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-black text-white border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition"
              required
            />
            <input
              type="text"
              placeholder="What's your biggest bottleneck right now?"
              className="w-full px-4 py-3 bg-black text-white border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition"
              required
            />
            <button
              className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-lg"
              onClick={(e) => e.preventDefault()}
            >
              Apply Now (€4,998)
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 italic">
            We're selective. If you're not ready, we'll tell you. If you are,
            we'll build.
          </p>
        </div>

        <p className="text-gray-500 text-sm italic">
          Payment plans available. Ask during screening call.
        </p>
      </div>
    </section>
  );
}
