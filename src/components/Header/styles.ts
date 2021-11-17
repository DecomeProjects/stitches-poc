import { styled } from '@Styles';

export const Container = styled('header', {
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '$md $lg $lg',

  margin: '0 auto',

  hr: {
    position: 'absolute',
    bottom: 0,

    display: 'none',

    borderBottom: '1px solid $grayishBlue',
    opacity: 0.5,
  },

  '@lg': {
    padding: '$lg $lg $xl',

    maxWidth: '90%',

    hr: {
      display: 'initial',

      width: 'calc(100% - calc($lg * 2))',
    },
  },

  '@xl': {
    padding: '$lg $sm $xl',

    maxWidth: '70rem',

    hr: {
      width: 'calc(100% - calc($sm * 2))',
    },
  },
});

const Section = styled('section', {
  display: 'flex',
});

export const Left = styled(Section, {
  gap: '$base',
});

export const Right = styled(Section, {
  gap: '$md',

  '@md': {
    gap: '$xl',
  },

  '@lg': {
    gap: '$xxl',
  },
});

export const Navigation = styled('ul', {
  display: 'flex',
  gap: '$xl',

  marginLeft: '3.5rem',

  listStyle: 'none',

  a: {
    textDecoration: 'none',
  },
});

export const Avatar = styled('img', {
  width: '$xl',
  height: '$xl',
  borderRadius: '$sm',
  objectFit: 'contain',

  '@lg': {
    width: '3.25rem',
    height: '3.25rem',
  },
});
