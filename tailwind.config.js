/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--theme-color-primary)",
        contrast: "var(--theme-color-contrast)",
        neutral: "var(--theme-color-neutral)",
      },
      fontFamily: {
        quicksand: ['var(--theme-font-quicksand)', 'sans-serif'],
        chewy: ['var(--theme-font-chewy)', 'cursive'],
      },
    },
  },
  plugins: [],
};
