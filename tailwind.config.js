/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      animation: {
        'slideLeft': 'slideLeft 40s linear infinite',
        'fadeInUp': 'fadeInUp 1s ease-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // fadeInUp: {
        //   '0%': {
        //     opacity: '0',
        //     transform: 'translateY(20px)',
        //   },
        //   '100%': {
        //     opacity: '1',
        //     transform: 'translateY(0)',
        //   },
        // },
      },
    },
  },
  plugins: [],
};