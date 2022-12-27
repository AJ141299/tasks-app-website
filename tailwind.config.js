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
        "text-tertiary": 'hsla(232,4%,55%,1.0)',
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
        'collection-mobile': '100%',
      },
      height: {
        'collection': '160px',
        'collection-mobile': '120%',
        'add-collection': '80px',
        'add-collection-mobile': '70px',
      },
      borderRadius: {
        'collection': '20px',
      },
      animation: {
        wiggle: 'pulse 1s ease-in-out 200ms',
      },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "640px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
};
