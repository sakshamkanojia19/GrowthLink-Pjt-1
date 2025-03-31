/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'text-shine': 'textShine 1s ease-in-out infinite alternate', // Adjust speed as needed
      },
      keyframes: {
        textShine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '500%': '500% auto',
      },
    },
  },
  plugins: [],
};
