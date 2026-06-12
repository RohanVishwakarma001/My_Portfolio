/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0e27',
          secondary: '#1a1f3a',
          card: '#16213e',
        },
        neon: {
          cyan: '#00d9ff',
          purple: '#b300ff',
          blue: '#0080ff',
          green: '#00ff41',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0aec0',
          muted: '#718096',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'border-flow': 'borderFlow 3s ease infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        borderFlow: {
          '0%, 100%': { borderColor: '#00d9ff' },
          '33%': { borderColor: '#b300ff' },
          '66%': { borderColor: '#0080ff' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(179, 0, 255, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 128, 255, 0.5)',
        'neon-lg-cyan': '0 0 40px rgba(0, 217, 255, 0.4)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
