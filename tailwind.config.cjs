/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A9A578",
          secondary: "#C36C59",
          accent: "#46926b",
          neutral: "#f9f9f6",
          "base-100": "#f9f9f6",
          info: "#A9A578",
          success: "#A9A578",
          warning: "#A9A578",
          error: "#46926b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
