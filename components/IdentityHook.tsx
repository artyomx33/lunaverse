"use client";

export function IdentityHook() {
  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <blockquote className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
          <span className="block mb-6">
            There are two types of people:
          </span>
          <span className="text-gray-600 block mb-2 text-3xl md:text-4xl">
            Those who optimize their processes.
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 block mb-4 text-3xl md:text-4xl">
            And those who become the system.
          </span>
          <span className="text-gray-800 text-2xl md:text-3xl block mt-6 font-black">
            This is the second category.
          </span>
        </blockquote>
        <p className="text-lg text-gray-600 mt-8 leading-relaxed">
          You stop chasing tools. You stop optimizing workflows. You stop trying to "do more with less."
          <br/>
          Instead, you become the operating system that decides what gets built, how it gets built, and when.
        </p>
      </div>
    </section>
  );
}
