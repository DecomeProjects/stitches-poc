import React, { useMemo } from 'react';

import { tokenize, IStitchesConfigCSS } from '@Styles';

import { IIconProps, IIConsList, registeredIcons } from './assets';

import { Container } from './styles';

type IExtendedIconProps = IIconProps & {
  icon: IIConsList;
  css?: IStitchesConfigCSS;
};

export const Icon: React.FC<IExtendedIconProps> = ({
  size = 'lg',
  color = 'darkBlue',
  css,
  icon,
}) => {
  const SvgIcon = useMemo(() => registeredIcons[icon], [icon]);

  return (
    <Container
      css={{
        width: tokenize(size),
        height: tokenize(size),
        ...css,
      }}
    >
      <SvgIcon size={size} color={color} />
    </Container>
  );
};
