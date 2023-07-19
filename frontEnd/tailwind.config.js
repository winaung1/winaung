/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   'my-yellow': '#f59e0b',
    //   'white': '#fff',
    //   'black': '#000',
    //   'gray': 'rgb(65, 62, 62)',
    //   'orange': 'orange-500'
    // },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/code.jpg')",
      }
    }
  },
  plugins: [],
}
