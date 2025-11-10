import React, { useEffect, useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper.jsx";

const members = [
  {
    name: "Rahul Kumar Dixit",
    role: "Founder & CEO",
    description:
      "Renowned educator turned entrepreneur with over 15 years of teaching experience. Mentor to thousands of students and startups.",
    image: "https://i.ibb.co/mXfzVsj/rahul.png",
  },
  {
    name: "Rohan Mehta",
    role: "Senior Software Architect",
    description:
      "Former Google engineer specializing in scalable systems and cloud infrastructure.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Product Design",
    description:
      "UX leader focused on human-centered digital experiences.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Sharma",
    role: "Full Stack Developer",
    description:
      "Builds robust web applications using Java, React, and Node.js.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function OurTeam() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % members.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (n) => setIndex((n + members.length) % members.length);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);
  const m = members[index];

  return (
    <section id="trainers" className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        {/* ---------- TITLE ---------- */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium shadow-glow mb-4">
            👥 Meet Our Experts
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Our Core Team
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Experienced professionals bridging academia and real-world technology.
          </p>
        </div>

        {/* ---------- TEAM DISPLAY ---------- */}
        <AnimatedWrapper>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative flex justify-center items-center">
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-[3px] transition-transform duration-500"
                style={{
                  boxShadow: "0 0 30px var(--accent)",
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full rounded-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Profile Text */}
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{m.name}</h3>
              <p className="text-[var(--accent)] font-semibold mb-3 text-sm sm:text-base">
                {m.role}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {m.description}
              </p>
            </div>
          </div>
        </AnimatedWrapper>

        {/* ---------- CONTROLS ---------- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 order-1 sm:order-none">
            <button
              onClick={prev}
              className="p-2 sm:p-3 rounded-full glass hover:shadow-glow hover:scale-105 transition-all"
              aria-label="Prev"
            >
              ←
            </button>
            <button
              onClick={next}
              className="p-2 sm:p-3 rounded-full glass hover:shadow-glow hover:scale-105 transition-all"
              aria-label="Next"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 order-2 sm:order-none">
            {members.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all ${
                  index === idx
                    ? "bg-[var(--accent)] scale-125"
                    : "bg-gray-500 hover:scale-110"
                }`}
                aria-label={`Go to member ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ---------- PROGRESS BAR ---------- */}
        <div className="mt-8 w-44 sm:w-56 mx-auto bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div className="bg-[var(--accent)] h-1.5 animate-[progress_5s_linear_infinite]" />
        </div>

        <style>{`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
