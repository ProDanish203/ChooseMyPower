import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: "#050315",
        bg: "#fbfbfe",
        primary: "#4b44da", 
        secondary: "#dedcff",
        accent: "#3028c8",
        whiteAccent: "#eff3f4",
        blackAccent: "#16181c",
      },
      backgroundImage:{
        "heroBanner": "linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0, 0.9)), url('/images/banner.jpg')",
      },
      scale: {
        xs: "450px"
      }
    },
  },
  plugins: [],
}
export default config
