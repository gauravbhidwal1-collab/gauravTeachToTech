import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MissionSection from "./components/MissionSection.jsx";
import IndustryProgramsSection from "./components/IndustryProgramsSection.jsx";
import OurTeam from "./components/OurTeam.jsx";
import ContactSection from "./components/ContactSection.jsx";
import { ThemeProvider } from "./components/ThemeController.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="smooth-scroll min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <MissionSection />
          <IndustryProgramsSection />
          <OurTeam />
          <section id="get-started" className="py-10" />
          <ContactSection />
        </main>
        <footer className="py-10 text-center text-gray-300">
          © {new Date().getFullYear()} TeachToTech
        </footer>
      </div>
    </ThemeProvider>
  );
}
