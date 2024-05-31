/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        neutral:"var(--neutral)",
        danger: "var(--danger-color)"
      },
      fontFamily: {
        primary: "var(--primary-font)",
        secondary: "var(--secondary-font)"
      },
      screens: {
        "2xs": "300px",
        xs: "360px",
        xl: "1150px",
        "2xl": "1500px",
      }

    },
  },
  plugins: [require('@tailwindcss/forms')],
}

