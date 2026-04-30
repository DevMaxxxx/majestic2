/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient-1":
          "linear-gradient(90deg, rgba(148, 187, 233, 1) 1%, rgba(238, 174, 202, 1) 60%, rgba(255, 182, 193, 1) 100%)",

        "custom-gradient-2":
          "radial-gradient(circle, rgba(245,0,219,1) 0%, rgba(167,0,226,1) 18%, rgba(227,0,221,0.48783263305322133) 60%)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      alignContent: {
        center: "center",
      },
      screens: {
        custom1400: "1400px",
        custom1530: "1530px",
      },
    },
  },
  plugins: [],
};
