import { styled } from '@Styles';

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  aspectRatio: '5 / 4',

  '.swiper-button-next, .swiper-button-prev': {
    width: '2.5rem',
    height: '2.5rem',

    background: '$white',
    borderRadius: '$rounded',
    color: '$darkBlue',

    '&::after': {
      fontSize: '$sm',
      fontWeight: '$bold',
    },
  },

  '.swiper-container, .swiper-wrapper': {
    margin: 0,

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  '.swiper-slide': {
    height: 'auto',
  },

  '@sm': {
    maxWidth: '27.75rem',

    aspectRatio: 'initial',

    '.swiper-container': {
      overflow: 'hidden',
      borderRadius: '$lg',
    },
  },

  '@lg': {
    minWidth: '27.75rem',
    minHeight: '27.75rem',
  },
});

export const ThumbsList = styled('ul', {
  display: 'flex',
  justifyContent: 'space-between',

  marginTop: '2rem',
  listStyle: 'none',
});

export const ThumbItem = styled('li', {
  height: '5.75rem',
  width: '5.75rem',

  borderRadius: '$md',
  border: '2px solid transparent',

  transition: 'border-color 0.2s',
  overflow: 'hidden',

  img: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',

    transition: 'opacity 0.2s',
  },

  variants: {
    active: {
      true: {
        borderColor: '$orange',

        img: {
          opacity: 0.4,
        },
      },
    },
  },
});
