import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeContext = createContext();

const THEMES = {
  emerald: {
    name: "Dark Emerald Glow",
    accent: "#10b981",
    bgFrom: "#000000",
    bgTo: "#00110b",
    particle: "rgba(16,185,129,0.28)",
    gradient: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,17,11,1) 100%)"
  },
  violet: {
    name: "Violet Glow",
    accent: "#a855f7",
    bgFrom: "#0b0017",
    bgTo: "#1a0433",
    particle: "rgba(168,85,247,0.25)",
    gradient: "linear-gradient(180deg, #0b0017 0%, #1a0433 100%)"
  },
  aqua: {
    name: "Aqua Blue Glow",
    accent: "#22d3ee",
    bgFrom: "#031018",
    bgTo: "#021e2a",
    particle: "rgba(34,211,238,0.25)",
    gradient: "linear-gradient(180deg, #031018 0%, #021e2a 100%)"
  },
  sunset: {
    name: "Sunset Glow",
    accent: "#fb923c",
    bgFrom: "#1a0a00",
    bgTo: "#220b09",
    particle: "rgba(251,146,60,0.25)",
    gradient: "linear-gradient(180deg, #1a0a00 0%, #220b09 100%)"
  },
  cyber: {
    name: "Cyber Blue Glow",
    accent: "#60a5fa",
    bgFrom: "#030915",
    bgTo: "#041124",
    particle: "rgba(96,165,250,0.25)",
    gradient: "linear-gradient(180deg, #030915 0%, #041124 100%)"
  }
};

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem("ttt_theme") || "emerald");

  const theme = useMemo(() => THEMES[themeKey] || THEMES.emerald, [themeKey]);

  useEffect(() => {
    localStorage.setItem("ttt_theme", themeKey);
    const root = document.documentElement;
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--bg-from", theme.bgFrom);
    root.style.setProperty("--bg-to", theme.bgTo);
    root.style.setProperty("--particle", theme.particle);
  }, [themeKey, theme]);

  const value = useMemo(() => ({ themeKey, setThemeKey, theme, THEMES }), [themeKey, theme]);

  return (
    <ThemeContext.Provider value={value}>
      <AnimatePresence mode="wait">
        <motion.div
          key={themeKey}
          className="fixed inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: theme.gradient }}
        />
      </AnimatePresence>
      <div className="particles fixed inset-0 -z-10" />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
