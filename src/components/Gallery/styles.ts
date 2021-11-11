import { styled } from '@Styles';

export const Container = styled('section', {
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
    width: '100%',
    height: '100%',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
});
