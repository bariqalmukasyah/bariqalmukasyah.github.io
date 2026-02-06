import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'running-light': {
          '0%': { top: '-20%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '120%', opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'running-light': 'running-light 3s infinite linear',
        scroll: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
