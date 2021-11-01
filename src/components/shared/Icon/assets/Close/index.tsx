import React from 'react';
import { IIconProps } from '..';
import { tokenize } from '../../../../../styles';

import { Path, Svg } from '../styles';

export const Close: React.FC<Required<IIconProps>> = ({ size, color }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.596 5.28198L18.718 7.40398L14.12 11.999L18.717 16.596L16.595 18.718L12 14.12L7.40498 18.717L5.28298 16.595L9.87798 12L5.28198 7.40398L7.40398 5.28198L11.999 9.87798L16.596 5.28198Z"
      css={{
        fill: tokenize(color),
      }}
    />
  </Svg>
);
