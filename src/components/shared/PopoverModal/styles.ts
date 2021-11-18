import { keyframes, styled } from '@Styles';

const Fade = keyframes({
  to: {
    opacity: 1,
  },
});

export const Container = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  background: '$white',
  border: '1px solid $lightGrayishBlue',
  borderRadius: '$md',
  boxShadow:
    '16px 32px 16px -16px rgba(0, 0, 0, 0.15), -16px 32px 16px -16px rgba(0, 0, 0, 0.15)',

  animationName: Fade(),
  animationDelay: '180ms',
  animationDuration: '400ms',
  animationFillMode: 'forwards',

  opacity: 0,

  variants: {
    hidden: {
      true: {
        animation: 'none',
      },
    },
  },
});

export const ModalHeader = styled('header', {
  padding: '$lg $md',
  borderBottom: '1px solid $lightGrayishBlue',
});

export const ModalMain = styled('main', {
  display: 'flex',
  padding: '$lg $lg $xl',
  minHeight: '11.75rem',
});

export const ModalOverlay = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '100%',
});
