/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        placeholder: "url('https://via.placeholder.com/150x600')",
      },
      colors: {
        primary: "#006d5b",
      },
    },
  },
  plugins: [],
};
