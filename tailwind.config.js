/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'beam': 'beam 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out'
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 1,
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            opacity: 0.8,
            transform: 'scale(1.05)',
            filter: 'brightness(1.2)'
          }
        },
        'sparkle': {
          '0%, 100%': { 
            opacity: 0,
            transform: 'scale(0)'
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1)'
          }
        },
        'beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'fade-in': {
          'from': { opacity: 0 },
          'to': { opacity: 1 }
        },
        'slide-in-from-top': {
          'from': { 
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          'to': { 
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        'scale-in': {
          'from': { 
            opacity: 0,
            transform: 'scale(0.95)'
          },
          'to': { 
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-white': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.05)\'%3e%3cpath d=\'m0 .5h32m-32 32v-32\'/%3e%3c/svg%3e")',
        'grid-gray': 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.1)\'%3e%3cpath d=\'m0 .5h32m-32 32v-32\'/%3e%3c/svg%3e")'
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}