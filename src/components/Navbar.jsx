import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeController.jsx";
import { ChevronDown } from "lucide-react";
import LogoImage from "../assets/Logo.png";

const themesList = [
  { key: "emerald", label: "Dark Emerald Glow" },
  { key: "violet", label: "Violet Glow" },
  { key: "aqua", label: "Aqua Blue Glow" },
  { key: "sunset", label: "Sunset Glow" },
  { key: "cyber", label: "Cyber Blue Glow" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { themeKey, setThemeKey } = useTheme();
  const themeRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleThemeSelect = (key) => {
    setThemeKey(key);
    setThemeOpen(false);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94%)] glass rounded-2xl px-4 py-3 border border-white/10">
      <div className="flex items-center justify-between gap-4">
        {/* ---------- LEFT: LOGO ---------- */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <img
            src={LogoImage}
            alt="TeachToTech"
            className="w-9 h-9 rounded-full shadow-glow"
          />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Teach<span className="text-[var(--accent)]">ToTech</span>
          </span>
        </button>

        {/* ---------- DESKTOP NAV ---------- */}
        <ul className="hidden md:flex items-center gap-6">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "services", label: "Services" },
            { id: "trainers", label: "Trainers" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToId(item.id)}
                className="hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ---------- RIGHT: THEME + CTA + MENU ---------- */}
        <div className="flex items-center gap-3">
          {/* THEME DROPDOWN */}
		<div className="relative" ref={themeRef}>
		<button
			onClick={() => setThemeOpen((v) => !v)}
			className="glass px-3 py-2 rounded-lg flex items-center gap-2 hover:shadow-glow transition-shadow text-sm sm:text-base"
		>
			Theme <ChevronDown size={16} />
		</button>
		
		{themeOpen && (
			<div
			className="absolute right-0 mt-2 w-52 rounded-xl p-2 shadow-[0_0_20px_rgba(0,255,128,0.2)] border border-[var(--accent)]"
			style={{
				background: "rgba(15, 15, 15, 0.95)", // dark glassy background
				backdropFilter: "blur(10px)",         // smooth frosted effect
			}}
			>
			{themesList.map((t) => (
				<button
				key={t.key}
				onClick={() => handleThemeSelect(t.key)}
				className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
					themeKey === t.key
					? "text-[var(--accent)] bg-white/10"
					: "text-gray-200 hover:text-white hover:bg-white/10"
				}`}
				>
				{t.label}
				</button>
			))}
			</div>
		)}
		</div>


          {/* CTA BUTTON */}
          <button
            onClick={() => scrollToId("contact")}
            className="hidden sm:block px-4 py-2 rounded-lg bg-[var(--accent)] text-black font-semibold hover:shadow-glow-lg transition-shadow text-sm sm:text-base"
          >
            Get Started
          </button>

          {/* HAMBURGER MENU */}
          <button
            className="md:hidden glass p-2 rounded-lg text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {menuOpen && (
        <div className="md:hidden mt-3 grid gap-2 bg-black/40 rounded-xl p-4 border border-white/10">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "services", label: "Services" },
            { id: "trainers", label: "Trainers" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="glass px-3 py-2 rounded-lg text-left hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="mt-3">
            <button
              onClick={() => scrollToId("contact")}
              className="w-full bg-[var(--accent)] text-black py-2 rounded-lg font-semibold hover:shadow-glow transition-shadow"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
