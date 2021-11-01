import React, { useMemo } from 'react';
import { tokenize } from '../../../styles/config';
import { IIconProps, IIConsList, registeredIcons } from './assets';

import { Container } from './styles';

type IExtendedIconProps = IIconProps & {
  icon: IIConsList;
};

export const Icon: React.FC<IExtendedIconProps> = ({
  size = 'lg',
  color = 'darkBlue',
  icon,
}) => {
  const SvgIcon = useMemo(() => registeredIcons[icon], [icon]);

  return (
    <Container
      css={{
        width: tokenize(size),
        height: tokenize(size),
      }}
    >
      <SvgIcon size={size} color={color} />
    </Container>
  );
};
