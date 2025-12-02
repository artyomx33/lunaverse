"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    {
      label: "Built",
      value: "7-Figure Operations",
      description: "Managed €multi-million platforms from zero",
    },
    {
      label: "Platforms",
      value: "6+",
      description: "From TeddyKids (staff management) to AI integrations",
    },
    {
      label: "Systems",
      value: "100+",
      description: "Deployed across operations, marketing, product, finance",
    },
  ];

  const testimonials = [
    {
      quote:
        "The system thinking is what changed everything for me. Not the tools—the OS.",
      author: "Operations Director",
      title: "€2.5M SaaS",
    },
    {
      quote: "I applied this in Week 1 and recovered 15 hours. The ROI is immediate.",
      author: "Founder",
      title: "AI Consulting",
    },
    {
      quote:
        "This is what every CEO should install before they scale. Period.",
      author: "Growth Lead",
      title: "Venture-Backed",
    },
  ];

  return (
    <section
      className="bg-gray-50 py-20 md:py-32 px-4 md:px-8"
      ref={ref}
      id="proof"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Proof of Execution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built by someone who's actually scaled operations. Not theory. Real
            systems. Real results.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((cred, idx) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200"
            >
              <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-2">
                {cred.label}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-black mb-2">
                {cred.value}
              </p>
              <p className="text-gray-600 text-sm">{cred.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Background & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 mb-16"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Built on What Works
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every system you'll learn is battle-tested across real businesses:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold mt-1">→</span>
              <span>
                <strong>Claude + GPT workflows</strong> that replaced hiring
                (saved €240K annually)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold mt-1">→</span>
              <span>
                <strong>Supabase architecture</strong> for scaling from 0 to
                100K users without hiring
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold mt-1">→</span>
              <span>
                <strong>Decision frameworks</strong> that turn chaos into
                strategy (used to close €500K deals)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold mt-1">→</span>
              <span>
                <strong>Time multiplication systems</strong> tested across
                operations, product, and growth
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            What They Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <blockquote className="mb-4">
                  <p className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <div>
                  <p className="font-semibold text-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-yellow-500 font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
