/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom navy palette used for dark theme accents
        navy: {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#c6d4ff',
          300: '#9fb7ff',
          400: '#6a8cff',
          500: '#355fff',
          600: '#2b4bcf',
          700: '#21379f',
          800: '#17236f',
          900: '#0d1140',
        },
        // Skyblue alias (works with existing "sky" utilities too)
        skyblue: {
          50: '#f0f9ff',
          100: '#e0f2ff',
          200: '#bfe9ff',
          300: '#9fe0ff',
          400: '#66ccff',
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0275c2',
          800: '#055a9a',
          900: '#03406b',
        },
        // Add a gentle teal variant to complement slate/blue
        tealsoft: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      keyframes: {
        'deep-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
        },
      },
      animation: {
        'deep-pulse': 'deep-pulse 2s ease-in-out infinite', // 8s duration for a slow, deep feel
      },
    },
  },
  plugins: [],
}
