/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'monospace'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        hud: {
          950: '#060a12',
          900: '#0a0e1a',
          800: '#0d1321',
          700: '#111827',
          600: '#1e293b',
        },
        gold: {
          DEFAULT: '#FFB800',
          dim: '#B8860B',
          glow: 'rgba(255, 184, 0, 0.4)',
        },
        arc: '#00d4ff',
      },
      boxShadow: {
        'gold-sm': '0 0 15px 1px rgba(255, 184, 0, 0.2)',
        'gold': '0 0 25px 2px rgba(255, 184, 0, 0.3)',
        'gold-lg': '0 0 40px 4px rgba(255, 184, 0, 0.25)',
        'panel': 'inset 0 0 60px rgba(255, 184, 0, 0.03)',
      },
      backgroundImage: {
        'grid-hud': 'linear-gradient(rgba(255, 184, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 184, 0, 0.04) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(255, 184, 0, 0.06) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px 2px rgba(255, 184, 0, 0.35)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 30px 4px rgba(255, 184, 0, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
