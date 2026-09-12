/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FCFBF7',
        ink: '#1A1A1A',
        'ink-soft': '#4B4B4B',
        mono: '#141414',
        accent: '#CCFF00',
        'accent-dim': '#a3cc00',
        // colorful palette for gradient headings / chips
        pop: {
          lime: '#9BE000',
          teal: '#00C2A8',
          blue: '#3B6CF5',
          violet: '#8A5CF6',
          pink: '#FF5DA2',
          orange: '#FF7A3D',
          yellow: '#FFC53D',
        },
      },
      fontFamily: {
        round: ['"M PLUS Rounded 1c"', 'sans-serif'],
        slab: ['"Roboto Slab"', 'serif'],
        display: ['Hanken Grotesk', '"M PLUS Rounded 1c"', 'sans-serif'],
        jp: ['"M PLUS Rounded 1c"', 'Noto Sans JP', 'sans-serif'],
        body: ['Inter', 'Noto Sans JP', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 22s linear infinite',
        'spin-slower': 'spin-slow 34s linear infinite reverse',
        marquee: 'marquee 30s linear infinite',
        blob: 'blob 14s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
