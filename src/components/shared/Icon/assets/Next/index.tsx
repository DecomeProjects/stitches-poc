import React from 'react';

import { tokenize } from '@Styles';

import { IIconProps } from '..';
import { Path, Svg } from '../styles';

export const Next: React.FC<Required<IIconProps>> = ({ size, color }) => (
  <Svg
    css={{
      width: tokenize(size),
      height: tokenize(size),
    }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8 4L16 12L8 20"
      css={{
        stroke: tokenize(color),
        strokeWidth: 3,
      }}
    />
  </Svg>
);
