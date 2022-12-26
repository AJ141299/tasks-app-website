/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "nav": 'hsla(234,16%,15%,1.0)',
        "text-primary": 'hsla(234,16%,90%,1.0)',
        "text-secondary": 'hsla(234,16%,70%,1.0)',
        "text-tertiary": 'hsla(234,16%,40%,1.0)',
        "primary-bg": 'hsla(230,15%,10%,1.0)',
        "primary-700": 'hsla(234,16%,10%,1.0)',
        "primary-600": 'hsla(234,16%,12%,1.0)',
        "primary-550": 'hsla(234,16%,14%,1.0)',
        "primary-500": 'hsla(234,16%,15%,1.0)',
        "primary-400": 'hsla(240,13%,20%,1.0)',
        "primary-300": 'hsla(240,13%,30%,1.0)',
        "primary-200": 'hsla(240,13%,50%,1.0)',
        "primary-100": 'hsla(240,13%,70%,1.0)',
        "primary-50": 'hsla(240,13%,80%,1.0)',
      },
      width: {
        'collection': '170px',
      },
      height: {
        'collection': '160px',
        'add-collection': '80px',
      },
      borderRadius: {
        'collection': '20px',
      },
      animation: {
        wiggle: 'pulse 1s ease-in-out 200ms',
      },
    },
  },
  plugins: [],
};
