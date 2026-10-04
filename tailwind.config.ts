// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        leaf: {
          50:  '#F1F8F2',
          100: '#DCEDDE',
          200: '#B8DBBD',
          300: '#8BC293',
          400: '#5AA765',
          500: '#2E7D32',
          600: '#256428',
          700: '#1E4F21',
          800: '#173D1A',
          900: '#0F2A11',
        },
        harvest: {
          50:  '#FFF9E6',
          100: '#FFEFB8',
          200: '#FFE08A',
          300: '#FFD05C',
          400: '#FFC107',
          500: '#F9A825',
          600: '#E09400',
          700: '#B87700',
          800: '#8A5900',
          900: '#5C3B00',
        },
        earth: {
          400: '#A1887F',
          500: '#8D6E63',
          600: '#6D4C41',
          700: '#5D4037',
        },
      },

      /* ⬇️ ADD THIS BLOCK */
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },

      borderRadius: {
        DEFAULT: '10px',
        lg: '14px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(27, 42, 30, 0.08)',
        glow: '0 8px 24px rgba(46, 125, 50, 0.28)',
      },
      keyframes: {
        'slide-in': {
          from: { transform: 'translateX(100%)' },
          to:   { transform: 'translateX(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in':  'fade-in 0.25s ease-out',
      },
    },
  },
  plugins: [],
}