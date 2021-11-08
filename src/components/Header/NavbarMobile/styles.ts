import { styled } from '@Styles';

export const Container = styled('nav', {
  position: 'absolute',
  top: 0,
  left: 0,

  width: '70%',
  height: '100%',
  padding: '$md $lg',

  background: 'white',
  transition: 'transform 0.2s',

  variants: {
    isOpen: {
      false: {
        transform: 'translateX(-100%)',
      },
    },
  },
});

export const NavbarOverlay = styled('div', {
  position: 'absolute',
  inset: 0,

  background: '$black',
  opacity: 0.75,
  transition: 'opacity 0.2s',

  variants: {
    isOpen: {
      false: {
        pointerEvents: 'none',
        opacity: 0,
      },
    },
  },
});

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  marginTop: '$xxl',

  li: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
  },
});
