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
      textColor: {
        primary: '#333333',
        secondary: '#2C8056',
      },
      boxShadow: {
        orange: '-10.364017486572266px 13.818690299987793px 0px 0px #F0D0BE',
        green: '-10.364017486572266px 13.818690299987793px 0px 0px #3BAF75',
      },
      borderColor: {
        primary: '#2C8056',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
