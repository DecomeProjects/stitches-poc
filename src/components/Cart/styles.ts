import { styled } from '@Styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$lg',

  width: '100%',

  ul: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
  },
});

export const CartItem = styled('li', {
  display: 'flex',
  gap: '$base',

  img: {
    width: '3rem',
    height: '3rem',
    objectFit: 'contain',
    borderRadius: '$sm',
  },

  '> div': {
    minWidth: 0,
  },
});

export const PriceContainer = styled('div', {
  display: 'flex',
  gap: '$sm',
});
