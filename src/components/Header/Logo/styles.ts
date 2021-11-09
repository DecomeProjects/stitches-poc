import { styled } from '@Styles';

export const Svg = styled('svg', {
  '> path': {
    fill: '$darkBlue',
    transition: 'fill 0.2s',
  },

  '&:hover > path': {
    fill: '$orange',
  },
});
