import React from "react";
import AnimatedWrapper from "./AnimatedWrapper.jsx";

export default function IndustryProgramsSection() {
  const list = [
    {
      title: "Technology Training",
      description:
        "Master cutting-edge programming, AI, and emerging technologies with hands-on projects guided by industry veterans.",
      points: [
        "Full-Stack Development",
        "Machine Learning & AI",
        "Cloud Computing",
        "DevOps & Automation",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
      popular: true,
    },
    {
      title: "Business Analytics",
      description:
        "Transform raw data into actionable insights with modern analytical tools and strategic thinking frameworks.",
      points: [
        "Data Science",
        "Business Intelligence",
        "Market Analysis",
        "Strategic Planning",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Design & UX",
      description:
        "Create exceptional user experiences through design thinking methodologies and user-centered design principles.",
      points: [
        "UI/UX Design",
        "Product Design",
        "Design Systems",
        "User Research",
      ],
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Entrepreneurship",
      description:
        "Learn startup fundamentals and business development strategies from founders who’ve built successful companies.",
      points: [
        "Business Planning",
        "Startup Leadership",
        "Team Networking",
        "Growth Strategies",
      ],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Engineering",
      description:
        "Advanced engineering practices and system design principles for building robust, scalable solutions.",
      points: [
        "Software Architecture",
        "Systems Design",
        "Project Leadership",
        "Quality Engineering",
      ],
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Digital Marketing",
      description:
        "Modern marketing strategies that drive growth, from content creation to performance analytics.",
      points: [
        "Growth Marketing",
        "Brand Strategy",
        "Social Media",
        "Performance Analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <section
      id="services"
      className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 text-white"
    >
      {/* ---------- SECTION HEADER ---------- */}
      <div className="max-w-6xl mx-auto text-center mb-14 md:mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium shadow-glow">
          🎯 What We Offer
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-3 leading-tight">
          Industry-Led Training Programs
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Six core areas where industry expertise makes the biggest difference
          in student outcomes.
        </p>
      </div>

      {/* ---------- PROGRAM GRID ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
        {list.map((p, i) => (
          <AnimatedWrapper key={i} delay={i * 0.04}>
            <div className="relative rounded-2xl p-6 sm:p-7 glass hover:shadow-glow-lg transition-all duration-300 flex flex-col h-full">
              {p.popular && (
                <span
                  className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold text-black"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  Most Popular
                </span>
              )}

              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-5"
              />

              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed text-center sm:text-left">
                {p.description}
              </p>

              <ul className="text-gray-200 text-sm sm:text-base space-y-1.5 mb-6">
                {p.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start sm:items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full mt-1 sm:mt-0"
                      style={{ backgroundColor: "var(--accent)" }}
                    ></span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className="w-full px-5 py-2 sm:py-2.5 rounded-md bg-[var(--accent)] text-black font-semibold hover:shadow-glow transition-shadow text-sm sm:text-base">
                  View Details
                </button>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>

      {/* ---------- CUSTOM SOLUTIONS BOX ---------- */}
      <div
        className="max-w-5xl mx-auto mt-16 md:mt-20 text-center rounded-3xl p-8 sm:p-10 border shadow-glow"
        style={{
          borderColor: "var(--accent)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          Custom Training Solutions Available
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Need something specific for your institution? We create tailored
          programs based on your curriculum needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold hover:shadow-glow transition-shadow text-sm sm:text-base">
            Request Custom Program
          </button>
          <button className="px-6 py-3 rounded-lg glass hover:shadow-glow transition-shadow text-sm sm:text-base">
            Schedule Consultation
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-xs sm:text-sm text-gray-300">
          <span>✅ 24/7 Support</span>
          <span>📅 Flexible Scheduling</span>
          <span>🎓 Industry Certified</span>
        </div>
      </div>
    </section>
  );
}
