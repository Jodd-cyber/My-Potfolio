/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fc',
        surface: '#ffffff',
        surfaceLight: '#f1f3f8',
        primary: '#6366f1',       // Indigo
        secondary: '#ec4899',     // Pink
        accent: '#06b6d4',        // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.25)',
        'glow-secondary': '0 0 30px rgba(236, 72, 153, 0.25)',
        'glow-accent': '0 0 30px rgba(6, 182, 212, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(99, 102, 241, 0.12)',
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 40% 20%, rgba(99,102,241,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(236,72,153,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6,182,212,0.06) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
