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
        info: "#4f46e5",
        success: "#84cc16",
        warning: "#eab308",
        error: "#d41976",
      },
    },
  },
  plugins: [],
};
