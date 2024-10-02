import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'custom-gradient': `radial-gradient(circle at top right, rgba(255, 165, 0, 0.5), transparent 30%),
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          'text-gradient': 'linear-gradient(to right, white 20%, rgb(77, 77, 200) 40%, pink 100%)',
      },
      backgroundSize: {
        'custom-size': ' 100%, 100% 100px',
      },
      
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '5', filter: 'brightness(1)' },
          '50%': { opacity: '2.5', filter: 'brightness(2)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite', // 1.5 seconds duration, infinite loop
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
    },
      colors:{
       'color':'#25184b'
      },
      
     
    },
  },
  plugins: [],
};
export default config;
