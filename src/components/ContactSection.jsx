import React from "react";
import AnimatedWrapper from "./AnimatedWrapper.jsx";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* ---------- LEFT COLUMN: CONTACT INFO ---------- */}
        <AnimatedWrapper>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:shadow-[0_0_25px_var(--accent)] transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-300 text-sm sm:text-base">
              <div>
                <h4 className="font-semibold text-white mb-1">📍 Address</h4>
                <p className="leading-relaxed">
                  123 Education Hub, Tech District
                  <br />
                  Innovation City, TC 12345
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">📧 Email</h4>
                <p>hello@teachtotech.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">🕓 Office Hours</h4>
                <p>
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat: 10:00 AM - 4:00 PM
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-400">
                <p>
                  Have a custom requirement? Our support team is available
                  <span
                    className="text-[var(--accent)] font-medium ml-1"
                  >
                    24/7 to assist you.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* ---------- RIGHT COLUMN: MESSAGE FORM ---------- */}
        <AnimatedWrapper delay={0.1}>
          <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:shadow-[0_0_25px_var(--accent)] transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              {/* Top 2 Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent)] transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent)] transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Institution + Subject */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    placeholder="University / College Name"
                    className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent)] transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent)] transition-all duration-300 text-white placeholder-gray-400">
                    <option className="bg-black text-gray-300">Select a subject</option>
                    <option className="bg-black text-gray-300">Java</option>
                    <option className="bg-black text-gray-300">Python</option>
                    <option className="bg-black text-gray-300">Frontend</option>
                    <option className="bg-black text-gray-300">Backend</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements or questions..."
                  className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-[var(--accent)] focus:shadow-[0_0_10px_var(--accent)] transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
