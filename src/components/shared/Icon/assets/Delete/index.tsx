import React from 'react';

import { tokenize } from '@/styles';

import { IIconProps } from '..';
import { Path, Svg } from '../styles';

export const Delete: React.FC<Required<IIconProps>> = ({ size, color }) => (
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
      d="M5 6.62501V5.75001C5 5.33401 5.334 5.00001 5.75 5.00001H9.25L9.544 4.41601C9.60512 4.29078 9.7003 4.18532 9.81864 4.11174C9.93697 4.03815 10.0737 3.99943 10.213 4.00001H13.784C13.9236 3.99992 14.0605 4.03881 14.1792 4.11231C14.298 4.1858 14.3938 4.29098 14.456 4.41601L14.75 5.00001H18.25C18.666 5.00001 19 5.33401 19 5.75001V6.62501C18.9997 6.72438 18.9601 6.81961 18.8899 6.88988C18.8196 6.96015 18.7244 6.99974 18.625 7.00001H5.375C5.27562 6.99974 5.1804 6.96015 5.11013 6.88988C5.03986 6.81961 5.00026 6.72438 5 6.62501V6.62501ZM18 8.37501V18.5C18 18.8978 17.842 19.2794 17.5607 19.5607C17.2794 19.842 16.8978 20 16.5 20H7.5C7.10218 20 6.72064 19.842 6.43934 19.5607C6.15804 19.2794 6 18.8978 6 18.5V8.37501C6 8.16901 6.169 8.00001 6.375 8.00001H17.625C17.831 8.00001 18 8.16901 18 8.37501ZM9.5 10.5C9.5 10.225 9.275 10 9 10C8.725 10 8.5 10.225 8.5 10.5V17.5C8.5 17.775 8.725 18 9 18C9.275 18 9.5 17.775 9.5 17.5V10.5ZM12.5 10.5C12.5 10.225 12.275 10 12 10C11.725 10 11.5 10.225 11.5 10.5V17.5C11.5 17.775 11.725 18 12 18C12.275 18 12.5 17.775 12.5 17.5V10.5ZM15.5 10.5C15.5 10.225 15.275 10 15 10C14.725 10 14.5 10.225 14.5 10.5V17.5C14.5 17.775 14.725 18 15 18C15.275 18 15.5 17.775 15.5 17.5V10.5Z"
      css={{
        fill: tokenize(color),
      }}
    />
  </Svg>
);
