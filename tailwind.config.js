/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      DarkBlue: '#2b3945', /* (Dark Mode Elements) */
      VeryDarkBlueBg: '#202c37', /* (Dark Mode Background) */
      VeryDarkBlue: '#111517', /* (Light Mode Text) */
      DarkGray: '#858585', /* (Light Mode Input) */
      VeryLightGray: '#fafafa', /* (Light Mode Background) */
      White: '#ffffff', /* (Dark Mode Text & Light Mode Elements) */
    },

    extend: {},
  },
  plugins: [],
}
