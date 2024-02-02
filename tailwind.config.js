/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        "3.75rem": "3.75rem",
        "6.5rem": "6.5rem",
        "8.75rem": "8.75rem"
      },
      width: {
        "3.75rem": "3.75rem",
        "6.5rem": "6.5rem",
        "8.75rem": "8.75rem"
      }
    },
  },
  plugins: [],
}
