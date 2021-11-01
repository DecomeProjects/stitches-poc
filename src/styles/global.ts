import { globalCss } from './config';

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':root': {
    fontSize: '100%',
  },

  body: {
    backgroundColor: '$lightGrayishBlue',
    color: '$black',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontSize: '$base',
  },
});
