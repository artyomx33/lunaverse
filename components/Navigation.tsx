"use client";

import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            ⚡
          </span>
          <span className="text-white font-bold text-lg">Luna-Verse OS</span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#3-days" className="text-gray-300 hover:text-yellow-400 transition">
            3 Days
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-yellow-400 transition">
            Pricing
          </a>
          <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition">
            FAQ
          </a>
          <a href="#apply" className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Apply
          </a>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden">
            <div className="px-4 py-4 space-y-4">
              <a href="#3-days" className="block text-gray-300 hover:text-yellow-400 transition">
                3 Days
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-yellow-400 transition">
                Pricing
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-yellow-400 transition">
                FAQ
              </a>
              <a href="#apply" className="block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition text-center">
                Apply
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
