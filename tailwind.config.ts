import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
    },
      colors:{
       'color':'#25184b'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(89.12deg, #160430 0.47%, rgba(22, 4, 48, 0) 22.87%)',
      },
     
    },
  },
  plugins: [],
};
export default config;
