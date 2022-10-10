const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
