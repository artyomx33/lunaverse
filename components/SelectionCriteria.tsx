"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SelectionCriteria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    {
      icon: "⚙️",
      title: "Skin in the Game",
      description:
        "You're running a real operation. Not exploring. Not testing. You've already committed.",
    },
    {
      icon: "📈",
      title: "Execution Track Record",
      description:
        "You've shipped products, managed teams, scaled revenue. You move—not just think about moving.",
    },
    {
      icon: "🧠",
      title: "Coachability",
      description:
        "You take feedback, test it, iterate. You're not here to convince me your way works. You're here to learn.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why We're Selective
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We interview every applicant. Not everyone gets in. This isn't
            rejection—it's protection.
          </p>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {criteria.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="card-glow card-glow-teddy bg-gray-50 rounded-xl p-8 border border-gray-200 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-black mb-6">
            What This Means for You
          </h3>

          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <strong>If you're not serious:</strong> We'll tell you. Honestly.
              If we don't think you'll execute—if we see hesitation or
              dependence on hand-holding—we'll decline your application. €4,998
              is wasted on dabbling. We'll save you money.
            </p>

            <p className="leading-relaxed">
              <strong>If you're ready:</strong> We'll build the OS WITH you.
              Screening doesn't mean gatekeeping. It means we only work with
              people committed to the work.
            </p>

            <p className="leading-relaxed italic text-gray-600">
              If this feels expensive because of risk—you're not ready. If it
              feels cheap because of potential—you already know what to do.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-yellow-200">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Next Step:</strong> Apply below. We'll review within 48
              hours and either invite you to a screening call or send honest
              feedback.
            </p>
            <p className="text-xs text-gray-500">
              No rejection = just different timing. Try again in 6 months if
              you're building something bigger.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
