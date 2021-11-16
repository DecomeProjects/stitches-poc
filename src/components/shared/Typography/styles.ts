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

    truncated: {
      true: {
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },
});
