/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/MainVerificationDone.jsx",
    "./src/components/MainVerification.jsx",
    "./src/components/MainBusinessInfo.jsx",
    "./src/components/MainBasicInfo.jsx",
  ],
  theme: {
    extend: {
      colors: {
				primary: '#EB8105',
				secondary: '#FAAC06',

			},
    },
  },
  plugins: [],
}

