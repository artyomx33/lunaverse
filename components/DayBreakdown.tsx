"use client";

export function DayBreakdown() {
  const days = [
    {
      day: "Day 1",
      title: "Brutal OS Install + AI Powerstack",
      points: [
        "Shatter old thinking. Install brutal clarity.",
        "Master the Claude x GPT loop. Build clarity maps.",
        "Connect your personal operating system.",
      ],
      output: "Custom OS doc + AI flow + Clarity maps",
    },
    {
      day: "Day 2",
      title: "Build with AI: Code, Design, Strategy",
      points: [
        "Live builds: landing pages, MVPs, brand visuals.",
        "Midjourney mastery. Supabase automation.",
        "Turn ideas into reality in hours, not weeks.",
      ],
      output: "Real project started (MVP, brand, or strategy)",
    },
    {
      day: "Day 3",
      title: "World Dominator Mode",
      points: [
        "Real-world OS design: how to actually run your business.",
        "Meetings, docs, pitching with Luna and Claude.",
        "Your signature project outline + 90-day execution plan.",
      ],
      output: "Full OS + weaponized AI assistant + execution roadmap",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          The 3-Day Blueprint
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {days.map((day, idx) => (
            <div
              key={idx}
              className="card-glow card-glow-teddy bg-black text-white border border-white/30 rounded-lg p-8"
            >
              <p className="text-yellow-400 font-bold text-sm mb-2">{day.day}</p>
              <h3 className="text-2xl font-bold mb-6">{day.title}</h3>

              <ul className="space-y-3 mb-8 text-gray-300">
                {day.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-yellow-400 flex-shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-500 mb-2">Output:</p>
                <p className="text-yellow-300 font-semibold">{day.output}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
