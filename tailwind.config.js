/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm neutral system — cream-forward, no pure white
        ink: "#211B14", // warm near-black (text)
        noir: "#15110B", // deep filmic dark (cinematic sections / hero)
        espresso: "#241C12", // slightly lifted dark
        canvas: "#F7F1E6", // warm cream base (page background)
        cream: "#FCF8EF", // lightest — cards/surfaces (replaces white)
        bone: "#EFE6D4", // alternating section tone
        sand: "#E2D7C1", // deeper — borders / dividers
        muted: "#726858", // secondary text
        // Brand accents (page 6)
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
      fontSize: {
        // Oversized display sizes for cinematic headlines
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "0.98" }],
        "10xl": ["10rem", { lineHeight: "0.95" }],
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
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up var(--marquee-duration, 44s) linear infinite",
        "scroll-down": "scroll-down var(--marquee-duration, 44s) linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "slow-zoom": "slow-zoom 18s ease-out both",
      },
    },
  },
  plugins: [],
};
