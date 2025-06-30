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
      gray:"#333333",
      red:"#ff0000",
      disableDark:"#707070",
      disable:"#a6a6a6",
      placeholder:"#8c8c8c",
      primary:"#ff6a00",
    },
    fontFamily:{
      rubik:"Libertinus Math",
    }
  },
  plugins: [],
}
