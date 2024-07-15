import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

type AccType = Record<string, string>

const range = (start: number, end: number): number[] => {
  const array = []
  for (let i = start; i <= end; i += 1) {
    array.push(i)
  }
  return array
}

const pxToRem = (px: number, base = 16) => `${px / base}rem`

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px)
        return acc
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px)
        return acc
      }, {}),
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        error: '#DC2626',
        white: '#FFFFFF',
        black: '#000000',
        'gray-01': '#F9FAFC',
        'gray-02': '#F3F4F6',
        'gray-03': '#EBECEE',
        'gray-04': '#DDDEE0',
        'gray-05': '#B9BABC',
        'gray-06': '#9A9B9D',
        'gray-07': '#717274',
        'gray-08': '#5E5E60',
        'gray-09': '#3F4041',
        'gray-10': '#1E1F20',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        mb: { max: '479px' },
        tb: { max: '1199px' },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.font-headline-01': {
          fontSize: pxToRem(20),
          lineHeight: '140%',
          fontWeight: '500',
        },

        '.font-headline-02': {
          fontSize: pxToRem(20),
          lineHeight: '140%',
          fontWeight: '700',
        },

        '.font-headline-03': {
          fontSize: pxToRem(24),
          lineHeight: '140%',
          fontWeight: '700',
        },

        '.font-title-01': {
          fontSize: pxToRem(14),
          lineHeight: '120%',
          fontWeight: '600',
        },

        '.font-title-02': {
          fontSize: pxToRem(14),
          lineHeight: '160%',
          fontWeight: '600',
        },

        '.font-title-03': {
          fontSize: pxToRem(15),
          lineHeight: '160%',
          fontWeight: '600',
        },

        '.font-title-04': {
          fontSize: pxToRem(16),
          lineHeight: '160%',
          fontWeight: '600',
        },

        '.font-body-01': {
          fontSize: pxToRem(12),
          lineHeight: '140%',
          fontWeight: '500',
        },

        '.font-body-02': {
          fontSize: pxToRem(14),
          lineHeight: '140%',
          fontWeight: '500',
        },

        '.font-caption-01': {
          fontSize: pxToRem(8),
          lineHeight: '120%',
          fontWeight: '500',
        },

        '.font-caption-02': {
          fontSize: pxToRem(10),
          lineHeight: '140%',
          fontWeight: '500',
        },

        '.font-caption-03': {
          fontSize: pxToRem(12),
          lineHeight: '140%',
          fontWeight: '400',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
} satisfies Config

export default config
