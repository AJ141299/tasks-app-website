/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": 'hsla(230,15%,10%,1.0)',
        "toggle-button-bg": 'hsla(234,16%,14%,1.0)',
        "collection-bg": 'hsla(234,16%,15%,1.0)',
        "collection-bg-hover": 'hsla(240,13%,20%,1.0)',
        "nav": 'hsla(234,16%,15%,1.0)',
        "text-primary": 'hsla(234,16%,90%,1.0)',
        "text-secondary": 'hsla(234,16%,70%,1.0)',
        "text-tertiary": 'hsla(234,16%,40%,1.0)',
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
    },
  },
  plugins: [],
};
