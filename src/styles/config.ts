import { createStitches } from '@stitches/react';

const tokenize = (value: string): string => `$${value}`;

const { styled, globalCss, createTheme, css, keyframes, theme, config } =
  createStitches({
    theme: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
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
        xxl: '3rem',
        xl: '2rem',
        lg: '1.5rem',
        md: '1.25rem',
        base: '1rem',
        tiny: '0.875rem',
        sm: '0.75rem',
        xs: '0.625rem',
      },

      fontWeights: {
        bold: 700,
        regular: 400,
      },

      fonts: {
        default: "'Kumbh Sans', sans-serif",
      },

      letterSpacings: {
        widest: '1.5px',
        wider: '0.5px',
        wide: '0.4px',
        normal: '0.25px',
        tight: '0.15px',
        tighter: '0.1px',
        tightest: '0px',
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
        xl: '3rem',
        lg: '2rem',
        md: '1.5rem',
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
