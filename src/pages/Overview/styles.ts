import { styled } from '@Styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$lg',

  width: '100%',
  margin: '0 auto',

  '@sm': {
    minWidth: '20rem',
    width: '70%',

    marginTop: '$lg',
  },

  '@md': {
    width: '60%',
    marginTop: '5.625rem',
  },

  '@lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    width: '90%',
    maxWidth: '64rem',
  },
});
