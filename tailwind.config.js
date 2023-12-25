/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
       colors: {
        MainYellow: '#BF9447'
      },
      backgroundImage: {
        'search-bar': 'url("https://as2.ftcdn.net/v2/jpg/01/57/28/31/1000_F_157283191_ALJy3vuwlPKVdDtPPCZsPpRk3BksFlwF.jpg")',
      },
    },
  },
  plugins: [],
}

