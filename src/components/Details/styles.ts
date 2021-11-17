import { styled } from '@Styles';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  padding: '$lg $lg 5.5rem',
  maxWidth: '28rem',
});

export const PaymentInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: '$lg',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$tiny',
  },

  '@lg': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$sm',

    marginTop: '$xl',
  },
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$base',

  marginTop: '$lg',

  '@md': {
    flexDirection: 'row',

    marginTop: '$xl',
  },
});
