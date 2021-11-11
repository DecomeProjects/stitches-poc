import { styled } from '@Styles';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  padding: '$lg $lg 5.5rem',
});

export const PaymentInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginTop: '$lg',

  '> div': {
    display: 'flex',
    gap: '$tiny',
  },
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$base',

  marginTop: '$lg',
});
