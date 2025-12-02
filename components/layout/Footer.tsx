export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                ⚡
              </span>
              <span className="text-2xl font-bold">Luna-Verse OS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A 3-day master experience for operators ready to escape the chaos and build real empires.
            </p>
            <p className="text-yellow-400 font-semibold mt-4 text-sm">
              Limited to 6 people per cohort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-yellow-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#3-days"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  3-Day Breakdown
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Pricing & Tiers
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-yellow-300">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-400 text-sm">
                  Questions about the cohort?
                </p>
                <a
                  href="mailto:contact@lunaverse.com"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium mt-1 block"
                >
                  contact@lunaverse.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm mt-4">
                  Ready to apply?
                </p>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium mt-1"
                >
                  Submit your application
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Luna-Verse OS. All rights reserved.
          </p>
          <p>
            Built for operators who refuse to play small.
          </p>
        </div>
      </div>
    </footer>
  );
}
