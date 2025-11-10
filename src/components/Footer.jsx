import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/30 backdrop-blur-lg text-white py-10 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        <div>
          <h3 className="text-2xl font-extrabold text-[var(--accent)]">
            TeachToTech
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Empowering students with real-world tech education.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          {["Home", "About", "Services", "Trainers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} TeachToTech. All rights reserved.
        </div>
      </motion.div>

      {/* Floating glow line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] rounded-full blur-sm"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />
    </footer>
  );
}
