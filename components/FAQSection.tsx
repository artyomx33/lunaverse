"use client";

import { useState } from "react";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this for me if I'm just starting?",
      a: "No. This is for people who've already built something and hit a ceiling. You need skin in the game.",
    },
    {
      q: "Will this break everything I'm doing right now?",
      a: "Yes. That's why it works. You'll break, then rebuild stronger.",
    },
    {
      q: "Can I do this remotely?",
      a: "3-day event is IN-PERSON ONLY. Full immersion required. No distractions.",
    },
    {
      q: "What if I can't code?",
      a: "You'll learn. Day 2 is live building with AI doing 70% of the work. The system matters more than the skill.",
    },
    {
      q: "Is this just another course?",
      a: "No. Courses are content. This is installation. You leave with an OS running your brain and business.",
    },
    {
      q: "What if I hate it?",
      a: "You won't. But if you do, tell me. I'll fix what broke.",
    },
    {
      q: "Can I get my money back?",
      a: "No. Because you won't ask. But if scarcity and commitment aren't your style, skip this entirely.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
          Objections
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold text-black">
                  {faq.q}
                </span>
                <span className="text-2xl text-yellow-400">
                  {open === idx ? "−" : "+"}
                </span>
              </button>

              {open === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
