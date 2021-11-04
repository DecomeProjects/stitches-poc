import { styled } from '@Styles';

export const Container = styled('p', {
  variants: {
    lineThrough: {
      true: {
        textDecoration: 'line-through',
      },
    },

    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },
});
