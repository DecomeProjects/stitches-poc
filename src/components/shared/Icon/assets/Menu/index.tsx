import React from 'react';

import { tokenize } from '@Styles';

import { IIconProps } from '..';
import { Path, Svg } from '../styles';

export const Menu: React.FC<Required<IIconProps>> = ({ size, color }) => (
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 16.5V19.5H4V16.5H20ZM20 10.5V13.5H4V10.5H20ZM20 4.5V7.5H4V4.5H20Z"
      css={{
        fill: tokenize(color),
      }}
    />
  </Svg>
);
