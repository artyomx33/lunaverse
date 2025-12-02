"use client";

import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/lib/glow-effect-kit";

export function PricingTiers() {
  const tiers = [
    {
      name: "Beta Cohort",
      price: "€1,497",
      period: "Early bird",
      description: "First cohort. Lowest price. Highest leverage.",
      features: [
        "3-day live experience",
        "Personal OS installation",
        "AI workflow templates",
        "90-day execution plan",
        "Direct access during event",
      ],
      cta: "Apply (Limited)",
      highlighted: false,
    },
    {
      name: "Standard",
      price: "€4,998",
      period: "Investment",
      description: "The complete Luna-Verse OS experience.",
      features: [
        "3-day live experience",
        "Personal OS installation",
        "AI workflow templates",
        "90-day execution plan",
        "30-day post-event support",
        "Inner Circle access",
        "Private community",
      ],
      cta: "Apply Now",
      highlighted: true,
    },
    {
      name: "Free Spot",
      price: "€0",
      period: "Referral only",
      description: "Refer 2 paying members. Your seat is free.",
      features: [
        "3-day live experience",
        "Personal OS installation",
        "AI workflow templates",
        "90-day execution plan",
        "Proof of leverage",
      ],
      cta: "Get a Referral Spot",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Investment Options
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Limited to 6-8 people per cohort. Operators don't hesitate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <GlowCard
              key={idx}
              variant={tier.highlighted ? "teddy" : "ocean"}
              spread={tier.highlighted ? 30 : 20}
              innerClassName={
                tier.highlighted
                  ? "bg-black text-white"
                  : "bg-gray-50 text-gray-900"
              }
            >
              <div
                className={`p-8 ${
                  tier.highlighted ? "bg-gradient-to-br from-blue-900 to-purple-900" : ""
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? "text-yellow-300" : "text-black"
                  }`}
                >
                  {tier.name}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {tier.period}
                </p>

                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-yellow-300" : "text-black"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>

                <p
                  className={`text-sm mb-6 ${
                    tier.highlighted ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>

                <Button
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className={`w-full mb-6 ${
                    tier.highlighted ? "bg-yellow-400 text-black hover:bg-yellow-300" : ""
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>

              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-3">
                      <span
                        className={`text-xl flex-shrink-0 ${
                          tier.highlighted ? "text-yellow-400" : "text-blue-500"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={tier.highlighted ? "text-gray-200" : "text-gray-700"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-12 italic">
          Payment plans available. Cohort capacity is limited.
        </p>
      </div>
    </section>
  );
}
