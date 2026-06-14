/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          900: '#05060a',
          800: '#080a12',
          700: '#0d1018',
          600: '#141826',
        },
        gold: {
          DEFAULT: '#e8c37e',
          soft: '#f3e3bf',
        },
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.05) translate(0, 0)' },
          '100%': { transform: 'scale(1.18) translate(-1.5%, -2%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2%, -3%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s ease-out forwards',
        drift: 'drift 26s ease-in-out infinite',
        'drift-slow': 'drift 40s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
