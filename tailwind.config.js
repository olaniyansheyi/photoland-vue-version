/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mainSlider: "url('/src/img/mainSlider_bg.png')"
      },
      colors: {
        body: '#1D1F23',
        primary: '#151618',
        accent: {
          DEFAULT: '#F6CD46',
          hover: '#E1B72E'
        }
      }
    }
  },

  plugins: []
}
