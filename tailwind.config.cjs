/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent, #10b981)"
      },
      boxShadow: {
        glow: "0 0 20px var(--accent, rgba(16,185,129,0.7))",
        'glow-lg': "0 0 35px var(--accent, rgba(16,185,129,0.8))"
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 1px)"
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
