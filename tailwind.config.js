/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1613",
        canvas: "#FAF7F1",
        cream: "#FDFBF7",
        bone: "#F1EBE0",
        sand: "#E7DFD1",
        muted: "#6E655C",
        line: "#1A1613",
        purple: "#8651ED",
        indigo: "#2525A5",
        red: "#D92C23",
        gold: "#EEC65E",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.04)" },
          "100%": { transform: "scale(1.14)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up var(--marquee-duration, 44s) linear infinite",
        "scroll-down": "scroll-down var(--marquee-duration, 44s) linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
