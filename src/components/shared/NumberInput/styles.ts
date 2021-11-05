import { styled } from '@Styles';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0 $sm',
  height: '3.5rem',
  width: '9.75rem',

  background: '$lightGrayishBlue',
  borderRadius: '$md',

  '>input': {
    display: 'none',
  },

  variants: {
    fluid: {
      true: {
        width: '100%',
      },
    },
  },
});
