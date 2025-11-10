import React from "react";
import AnimatedWrapper from "./AnimatedWrapper.jsx";
import RahulImage from "../assets/Rahul.jpg"; // ✅ Local image import

export default function MissionSection() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-20 bg-transparent text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* ---------- LEFT: IMAGE + TESTIMONIAL ---------- */}
        <AnimatedWrapper>
          <div className="space-y-6">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl flex justify-center items-center bg-black/30 p-1 sm:p-2">
              <img
                src={RahulImage}
                alt="Industry professional teaching students"
                className="w-full h-auto max-h-[400px] object-contain rounded-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent transition-all duration-500 group-hover:from-black/20 pointer-events-none" />
            </div>

            {/* Testimonial Card */}
            <div
              className="glass rounded-xl p-5 sm:p-6 border-l-4 sm:border-l-2"
              style={{ borderColor: "var(--accent)" }}
            >
              <blockquote className="text-sm sm:text-base text-gray-100 italic mb-4 leading-relaxed">
                "The best way to learn is from someone who's actually done the
                work. Our experts don't just teach concepts—they share real
                experiences."
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <span className="text-black font-semibold text-sm sm:text-base">
                    R
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    Rahul Kumar Dixit
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    Founder, TeachToTech
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* ---------- RIGHT: MISSION & DIFFERENTIATORS ---------- */}
        <AnimatedWrapper delay={0.1}>
          <div className="text-center md:text-left">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-prose mx-auto md:mx-0">
              To make education more relevant by connecting students with
              industry professionals who can share real-world knowledge,
              practical skills, and current market insights.
            </p>

            {/* Sub-Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-5">
              What Makes Us Different
            </h3>

            {/* Points */}
            <div className="space-y-5">
              {[
                {
                  title: "Vetted Industry Experts",
                  desc: "All our trainers have 10+ years of hands-on industry experience.",
                },
                {
                  title: "Current Content",
                  desc: "Training materials updated based on latest industry trends.",
                },
                {
                  title: "Flexible Integration",
                  desc: "Seamlessly fits into existing college curriculum and schedules.",
                },
              ].map((item, i) => (
                <div className="flex items-start gap-3 justify-center md:justify-start" key={i}>
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-semibold mt-1 flex-shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm sm:text-base mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div
              className="rounded-2xl p-5 sm:p-6 mt-10 border transition-all duration-300 hover:shadow-[0_0_20px_var(--accent)]"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                borderColor: "var(--accent)",
              }}
            >
              <h4 className="text-sm sm:text-base font-semibold mb-2">
                Ready to Transform Your Curriculum?
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mb-4">
                Join 1000+ institutions already benefiting from industry
                expertise.
              </p>
              <button className="px-5 sm:px-6 py-2 sm:py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:shadow-glow transition-all text-sm sm:text-base">
                Get Started Today
              </button>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
