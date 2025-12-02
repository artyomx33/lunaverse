"use client";

import { useState } from "react";
import { subscribeToConvertKit } from "@/lib/convertkit";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await subscribeToConvertKit({
        email,
        fields: {
          bottleneck: question,
        },
      });

      if (result.success) {
        setSubmitted(true);
        setEmail("");
        setQuestion("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-yellow-300 text-xl font-bold mb-2">
                Application received.
              </p>
              <p className="text-gray-300">
                We'll review within 48 hours. Check your email for next steps.
              </p>
            </div>
          ) : (
            <>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black text-white border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                  required
                  disabled={loading}
                />
                <textarea
                  placeholder="What's your biggest bottleneck right now?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-4 py-3 bg-black text-white border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none transition resize-none h-24"
                  required
                  disabled={loading}
                />

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Applying..." : "Apply Now (€4,998)"}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 italic">
                We're selective. If you're ready, apply. If not, don't waste your time.
              </p>
            </>
          )}
        </div>

        <p className="text-gray-500 text-sm italic">
          Payment plans available. Ask during screening call.
        </p>
      </div>
    </section>
  );
}
