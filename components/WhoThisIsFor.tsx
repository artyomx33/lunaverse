"use client";

export function WhoThisIsFor() {
  const avatars = [
    {
      icon: "👑",
      title: "CEOs Tired of Slow Execution",
      desc: "Running operations at 30% of your potential. Ready to 10x.",
    },
    {
      icon: "⚙️",
      title: "Operators Drowning in Tools",
      desc: "ChatGPT, Notion, Slack, spreadsheets... chaos. Need ONE system.",
    },
    {
      icon: "🚀",
      title: "Builders Who Want AI Superpowers",
      desc: "Build faster, smarter, meaner. AI as co-founder, not toy.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          Who This Is For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avatars.map((avatar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-400 transition">
              <div className="text-5xl mb-4">{avatar.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">{avatar.title}</h3>
              <p className="text-gray-600">{avatar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
