import { styled } from '@Styles';

export const Container = styled('nav', {
  position: 'relative',
  width: '100%',
  marginLeft: '3.5rem',
});

export const List = styled('ul', {
  display: 'flex',
  gap: '$base',

  listStyle: 'none',

  li: {
    padding: '0 $sm',
  },

  a: {
    textDecoration: 'none',
  },
});

export const ActiveIndicator = styled('div', {
  position: 'absolute',
  bottom: -43,
  height: 5,

  background: '$orange',

  transition: 'left 0.4s, width 0.2s',
});
