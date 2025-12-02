"use client";

import { useState } from "react";
import { subscribeToConvertKit } from "@/lib/convertkit";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
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
          interests: "waitlist",
        },
        tags: [13944], // Luna-Waitlist tag
      });

      if (result.success) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.error || "Failed to subscribe. Try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to subscribe. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-gray-50 p-8 md:p-12 border border-yellow-200">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Not Ready Yet?
          </h3>
          <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
            Join the waitlist. Get a free clarity framework + first notice when the next cohort opens.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-700 font-semibold text-lg">
                ✓ You're on the waitlist!
              </p>
              <p className="text-green-600 text-sm mt-2">
                Check your email for the clarity framework (arriving shortly).
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Joining..." : "Join Waitlist (Free)"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
