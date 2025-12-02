"use client";

export function BonusesSection() {
  const bonuses = [
    "Luna + GPT + Claude Power Prompt Pack (20+ prompts)",
    "Supabase Backend Flow Template",
    "Brutal Clarity Notes System",
    "Time Fractal Planner",
    "DM Scripts for Outreach",
    "OS Design Doc Template",
  ];

  return (
    <section className="bg-black text-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Bonuses Included
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className="text-2xl text-yellow-400">→</span>
              <p className="text-lg text-gray-200">{bonus}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-xl border border-yellow-400">
          <p className="text-sm text-gray-400 mb-3">EXCLUSIVE:</p>
          <h3 className="text-2xl font-bold mb-3 text-yellow-300">
            + Inner Circle Access (Mystery Box)
          </h3>
          <p className="text-gray-300 text-lg">
            Some graduate. Some get invited deeper.
            <br />
            <span className="italic">What happens in the Inner Circle…</span>
            <br />
            <span className="font-bold text-yellow-300">begins with the OS.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
