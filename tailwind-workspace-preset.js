// having a global configuration for all teams in the monorepo
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
  plugins: [require('@tailwindcss/typography')],
  presets: [require('./../domsmith/apps/site/tailwind.config')],
};
