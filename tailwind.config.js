/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'gray': '#8492a6',
          },},
  },
  plugins: [nativewind/babel],
}

