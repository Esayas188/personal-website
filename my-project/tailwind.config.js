/** @type {import('tailwindcss').Config} */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg'],
    alias: {
      '@public': './public',
    },
  },
  content: ["./src/App.js","./src/Home.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "linear-gradient(to right bottom, rgba(27,36,47,0.9), rgba(27,36,47,0.9))",

        'hero-pattern': "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      
      },
      

    },
  },
  plugins: [],
}

