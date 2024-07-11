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
