/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16264D",
          50: "#EEF1F8",
          100: "#D6DDEE",
          200: "#AEBBDD",
          300: "#8598C9",
          400: "#5C76B4",
          500: "#3C5596",
          600: "#233C74",
          700: "#1C305D",
          800: "#16264D",
          900: "#0E1834",
          950: "#080D1D"
        },
        gold: {
          DEFAULT: "#E3A335",
          50: "#FDF5E7",
          100: "#FBE9C9",
          200: "#F5D293",
          300: "#EFBB5D",
          400: "#E9AC49",
          500: "#E3A335",
          600: "#C68617",
          700: "#A6701A"
        },
        coral: {
          DEFAULT: "#F1704C",
          light: "#FBDCD1"
        },
        cream: "#FAF7F1",
        ink: "#161A1F",
        slate: {
          soft: "#6B7280"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(22,38,77,0.25)",
        soft: "0 10px 30px -12px rgba(22,38,77,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: 0, transform: "translateY(24px) rotate(-1.5deg)" },
          "100%": { opacity: 1, transform: "translateY(0) rotate(-1.5deg)" },
        },
      },
      animation: {
        floatIn: "floatIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
