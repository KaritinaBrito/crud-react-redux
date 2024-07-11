/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue-baby': '#BBE9FF',
      'blue-card': '#E3F4F4',
      'pink-baby': '#FFB4C2',
      'yellow-note': '#FFFDB5',
      'orange-note': '#EF9C66',
      'green': '#BFF6C3',
      'purple-base': '#8E7AB5',
      'white': '#F5F7F8',
      'gray-base': '#373A40',
      'gray-zinc': '#B4B4B8'
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

