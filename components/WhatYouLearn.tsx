"use client";

export function WhatYouLearn() {
  const outcomes = [
    {
      title: "AI Stack Mastery",
      desc: "Claude + GPT workflows. Prompt chaining. Automated decision trees.",
    },
    {
      title: "Brutal Clarity System",
      desc: "Notes method. Planning templates. Decision trees. Real clarity.",
    },
    {
      title: "Live Building",
      desc: "Code, design, strategy in real-time. Build MVPs in hours.",
    },
    {
      title: "Time Fractals",
      desc: "Rhythm over hustle. Schedule like a pro. Execute like a killer.",
    },
    {
      title: "Real-World OS",
      desc: "How to actually run your business. Meetings. Docs. Pitching.",
    },
    {
      title: "Identity Transformation",
      desc: "Become the system. Stop chasing tools. Start building empires.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          What You'll Learn
        </h2>

        {/* Value Stack Visual */}
        <div className="mb-16 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <img
            src="/images/value-stack.webp"
            alt="Value Stack - What You Get from Luna-Verse OS"
            className="w-full h-auto"
          />
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-black mb-3">{outcome.title}</h3>
              <p className="text-gray-600">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
