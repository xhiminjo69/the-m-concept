/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────────────────────
// THE M CONCEPT — Design System
// Premium furniture brand: warm, minimal, modern
// Inspired by the logo's wood-grain texture + magenta→coral gradient
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // ─── RESPONSIVE BREAKPOINTS ─────────────────────────────────────────────
    screens: {
      xs:    '375px',
      sm:    '640px',
      md:    '768px',
      lg:    '1024px',
      xl:    '1280px',
      '2xl': '1536px',
    },

    // ─── CONTAINER ───────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm:      '1.5rem',
        md:      '2rem',
        lg:      '2.5rem',
        xl:      '3rem',
        '2xl':   '4rem',
      },
      screens: {
        sm:    '640px',
        md:    '768px',
        lg:    '1024px',
        xl:    '1280px',
        '2xl': '1440px',
      },
    },

    extend: {

      // ─── COLOR PALETTE ────────────────────────────────────────────────────
      colors: {

        // Wood tones — primary neutral palette (logo's right-side grain)
        wood: {
          50:  '#FDF8F2',
          100: '#F5EAD9',
          200: '#E8D0B0',
          300: '#D4B48A',
          400: '#BF9468',
          500: '#A67C52',
          600: '#8A6340',
          700: '#6B4A2E',
          800: '#4A3120',
          900: '#2C1D10',
        },

        // Coral / Orange — primary CTA accent (logo's peak gradient hue)
        coral: {
          50:  '#FFF4EF',
          100: '#FFE4D4',
          200: '#FFC4A3',
          300: '#FF9E71',
          400: '#FF7A47',
          500: '#F4511E',
          600: '#D93E0D',
          700: '#B33009',
          800: '#8C2507',
          900: '#5C1803',
        },

        // Plum / Magenta — secondary accent (logo's left-leg deep hue)
        plum: {
          50:  '#F9F0FA',
          100: '#F0D9F5',
          200: '#DEB0EA',
          300: '#C47DD6',
          400: '#A94FBF',
          500: '#8E2FA8',
          600: '#722390',
          700: '#581A72',
          800: '#3C1050',
          900: '#220830',
        },

        // Warm stone grays — UI structure
        stone: {
          50:  '#FAFAF9',
          100: '#F5F5F3',
          200: '#E8E8E4',
          300: '#D1D1CB',
          400: '#A8A89F',
          500: '#78786E',
          600: '#57574F',
          700: '#3A3A34',
          800: '#232320',
          900: '#0F0F0E',
        },

        // Semantic shorthand
        background: '#FDF8F2',
        surface:    '#FAF5EE',
        border:     '#E8D0B0',
        accent:     '#F4511E',
        muted:      '#78786E',
      },

      // ─── TYPOGRAPHY ───────────────────────────────────────────────────────
      fontFamily: {
        // CSS variables injected by next/font — fall back to system fonts
        display: ['var(--font-display)', '"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['var(--font-body)',    'Inter', 'system-ui', 'sans-serif'],
        label:   ['var(--font-label)',   'Montserrat', 'Inter', 'sans-serif'],
        brand:   ['var(--font-brand)',   'Oswald', 'Impact', 'sans-serif'],
      },

      fontSize: {
        'display-2xl': ['4.5rem',   { lineHeight: '1.05', letterSpacing: '-0.03em',  fontWeight: '300' }],
        'display-xl':  ['3.75rem',  { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '300' }],
        'display-lg':  ['3rem',     { lineHeight: '1.15', letterSpacing: '-0.02em',  fontWeight: '400' }],
        'display-md':  ['2.25rem',  { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '400' }],
        'display-sm':  ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em',  fontWeight: '500' }],
        'body-xl':  ['1.25rem',   { lineHeight: '1.75' }],
        'body-lg':  ['1.125rem',  { lineHeight: '1.75' }],
        'body-md':  ['1rem',      { lineHeight: '1.7'  }],
        'body-sm':  ['0.9375rem', { lineHeight: '1.65' }],
        'body-xs':  ['0.875rem',  { lineHeight: '1.6'  }],
        'label-lg': ['0.875rem',  { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '600' }],
        'label-md': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.1em',  fontWeight: '600' }],
        'label-sm': ['0.75rem',   { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '700' }],
      },

      // ─── SPACING ──────────────────────────────────────────────────────────
      spacing: {
        18: '72px',
        22: '88px',
        'section-xs': '3rem',
        'section-sm': '5rem',
        'section-md': '7rem',
        'section-lg': '9rem',
        'section-xl': '12rem',
      },

      // ─── BORDER RADIUS ────────────────────────────────────────────────────
      borderRadius: {
        none:    '0',
        xs:      '2px',
        sm:      '4px',
        DEFAULT: '6px',
        md:      '8px',
        lg:      '12px',
        xl:      '16px',
        '2xl':   '20px',
        '3xl':   '28px',
        full:    '9999px',
      },

      // ─── SHADOWS (warm-tinted) ─────────────────────────────────────────────
      boxShadow: {
        xs:           '0 1px 2px 0 rgba(166,124,82,0.06)',
        sm:           '0 2px 4px 0 rgba(166,124,82,0.08)',
        DEFAULT:      '0 4px 12px 0 rgba(166,124,82,0.10)',
        md:           '0 6px 20px 0 rgba(166,124,82,0.12)',
        lg:           '0 12px 40px 0 rgba(166,124,82,0.14)',
        xl:           '0 24px 64px 0 rgba(166,124,82,0.16)',
        '2xl':        '0 32px 80px 0 rgba(166,124,82,0.20)',
        card:         '0 2px 8px 0 rgba(44,29,16,0.06), 0 8px 24px 0 rgba(44,29,16,0.08)',
        'card-hover': '0 8px 24px 0 rgba(44,29,16,0.10), 0 24px 48px 0 rgba(44,29,16,0.12)',
        accent:       '0 4px 20px 0 rgba(244,81,30,0.25)',
        none:         'none',
      },

      // ─── TRANSITIONS ──────────────────────────────────────────────────────
      transitionTimingFunction: {
        'ease-premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      // ─── BACKGROUND GRADIENTS ─────────────────────────────────────────────
      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #8E2FA8 0%, #F4511E 60%, #BF9468 100%)',
        'coral-gradient':   'linear-gradient(135deg, #FF7A47 0%, #F4511E 100%)',
        'wood-gradient':    'linear-gradient(160deg, #FDF8F2 0%, #F5EAD9 40%, #E8D0B0 100%)',
        'surface-gradient': 'linear-gradient(180deg, #FAF5EE 0%, #F5EAD9 100%)',
        'hero-overlay':     'linear-gradient(to bottom, rgba(44,29,16,0) 0%, rgba(44,29,16,0.55) 100%)',
      },

      // ─── ASPECT RATIOS ────────────────────────────────────────────────────
      aspectRatio: {
        portrait: '3 / 4',
        banner:   '21 / 9',
        golden:   '1.618 / 1',
      },
    },
  },

  plugins: [],
};
