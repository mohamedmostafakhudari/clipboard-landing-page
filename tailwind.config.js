/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          dark: "hsl(var(--neutral-dark))",
        },
      },
      fontFamily: {
        body: ["Bai Jamjuree", "sans-serif"],
      },
      backgroundImage: {
        "pattern-desktop": "url('src/assets/images/bg-header-desktop.png')",
        "pattern-mobile": "url('src/assets/images/bg-header-mobile.png')",
      },
      boxShadow: {
        primaryShadow:
          "inset 0px -2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 2px hsla(var(--primary), 0.5)",
        secondaryShadow:
          "inset 0px -2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 2px hsla(var(--secondary), 0.5)",
      },
    },
  },
  plugins: [],
};
