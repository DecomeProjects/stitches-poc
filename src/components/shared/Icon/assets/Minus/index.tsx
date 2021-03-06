import React from 'react';

import { tokenize } from '@Styles';

import { IIconProps } from '..';
import { Path, Svg } from '../styles';

export const Minus: React.FC<Required<IIconProps>> = ({ size, color }) => (
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
      d="M17.357 13.666C17.4414 13.6663 17.5251 13.6498 17.6031 13.6177C17.6812 13.5855 17.7522 13.5383 17.8119 13.4786C17.8717 13.4189 17.919 13.3481 17.9513 13.2701C17.9836 13.192 18.0001 13.1084 18 13.024V10.977C18.0003 10.8925 17.9838 10.8087 17.9516 10.7306C17.9194 10.6525 17.872 10.5815 17.8123 10.5217C17.7525 10.462 17.6815 10.4146 17.6034 10.3824C17.5252 10.3502 17.4415 10.3337 17.357 10.334H6.643C6.55849 10.3337 6.47476 10.3502 6.39663 10.3824C6.31849 10.4146 6.24751 10.462 6.18774 10.5217C6.12798 10.5815 6.08063 10.6525 6.04841 10.7306C6.01619 10.8087 5.99974 10.8925 6 10.977V13.023C6 13.38 6.287 13.666 6.643 13.666H17.357V13.666Z"
      css={{
        fill: tokenize(color),
      }}
    />
  </Svg>
);
