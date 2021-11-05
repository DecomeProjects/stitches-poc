import { createStitches } from '@stitches/react';

const tokenize = (value: string): string => `$${value}`;

const { styled, globalCss, createTheme, css, keyframes, theme, config } =
  createStitches({
    theme: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        lightOrange: 'hsl(25, 93%, 77%)',
        paleOrange: 'hsl(25, 100%, 94%)',

        darkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',

        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',

        transparent: 'transparent',
      },

      fontSizes: {
        xl: '2.625rem', // 42px
        lg: '1.75rem', // 28px
        base: '1rem', // 16px
        sm: '0.875rem', // 14px
      },

      fontWeights: {
        bold: 700,
        regular: 400,
      },

      fonts: {
        default: "'Kumbh Sans', sans-serif",
      },

      lineHeights: {
        xl: '3rem', // 48px
        lg: '2rem', // 32px
        base: '1.625rem', // 26px
        sm: '1.25rem', // 20px
      },

      letterSpacings: {
        widest: '0.075em',
        wider: '0.04em',
        wide: '0.02em',
        normal: '0.005em',
        tight: '0em',
      },

      radii: {
        xl: '1rem',
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
        rounded: '50%',
      },

      sizes: {
        xl: '2rem',
        lg: '1.5rem',
        md: '1.25rem',
        base: '1rem',
        tiny: '0.875rem',
        sm: '0.75rem',
        xs: 'o.625rem',
        none: 0,
      },

      space: {
        xl: '2rem',
        lg: '1.5rem',
        md: '1.25rem',
        base: '1rem',
        tiny: '0.75rem',
        sm: '0.5rem',
        xs: '0.25rem',
        none: 0,
      },
    },

    media: {
      xl: '(min-width: 1200px)',
      lg: '(min-width: 992px)',
      md: '(min-width: 768px)',
      sm: '(min-width: 560px)',
      xs: '(min-width: 560px)',
    },
  });

export {
  styled,
  globalCss,
  createTheme,
  css,
  keyframes,
  theme,
  config,
  tokenize,
};
