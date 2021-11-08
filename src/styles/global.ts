import { styled } from '.';
import { globalCss } from './config';

export const ButtonReset = styled('button', {
  cursor: 'pointer',
  border: 0,
  background: 'transparent',
});

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '#modal_container': {
    position: 'absolute',
    inset: 0,

    pointerEvents: 'none',

    '> *': {
      pointerEvents: 'all',
    },
  },

  ':root': {
    fontSize: '100%',
  },

  body: {
    backgroundColor: '$white',
    color: '$darkBlue',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontSize: '$base',
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    color: 'inherit',
  },
});
