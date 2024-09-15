/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'bunion-black-v0': '#232428',
        'bunion-white-v0': '#f4f5f9',

        'bunion-gray-v0': '#e8ecef',
        'bunion-gray-v1': '#dedde2',
        'bunion-gray-v2': '#858688',
        'bunion-gray-v3': '#8f929b',
        'bunion-gray-v4': '#9599a0',

        'bunion-blue-v0': '#cfdaee',
        'bunion-blue-v1': '#488cf7',
        'bunion-blue-v3': '#0764e4',

        'bunion-green-v3': '#139d48',
      },
      backgroundOpacity: {
        'bu-10': '0.1',
        'bu-20': '0.2',
        'bu-95': '0.95',
      }
    },
  },
  plugins: [],
}

