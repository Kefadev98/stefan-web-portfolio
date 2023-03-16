/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/assets/background.jpg')",
        contact: "url('/assets/contact.jpg')",
      },
      fontFamily: {
        poppins: ['"Poppins"', "cursive"],
      },
      colors: {
        darkBackground: "#00040F",
        lightBackground: "#d1d5db",
        hoverBlue: "#272a41",
        hoverPurple: "#261d88",
      },
    },
  },
  plugins: [],
};
