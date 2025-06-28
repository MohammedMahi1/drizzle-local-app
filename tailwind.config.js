/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors:{
      white:"#ffffff",
      black:"#000000",
      red:"#ff0000",
      disable:"#333333",
      primary:"#031cfc"
    }
  },
  plugins: [],
}
