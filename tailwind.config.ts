import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFB41F',
        terracotta: '#AF5746',
        cobalt: '#4774A1',
        cream: '#FAF7F2',
        'cream-dark': '#F2EBE0',
        dark: '#2C2A25',
        'dark-light': '#4A4640',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
