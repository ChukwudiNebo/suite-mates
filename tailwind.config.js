/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3BAF75',
        secondary: '#F0D0BE',
      },
      textColor:{
        primary: 'red'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
