import React, { useCallback, useMemo, useState } from 'react';

import { IColors, ISizes, IStitchesConfigCSS } from '@Styles';

import { Icon } from '../Icon';
import { IIConsList } from '../Icon/assets';

import { Container, Tooltip } from './styles';

type IIconButtonProps = {
  icon: IIConsList;
  tooltip: string;
  css?: IStitchesConfigCSS;
  size?: ISizes;
  iconColor?: IColors;
  hoverIconColor?: IColors;
};

export const IconButton: React.FC<IIconButtonProps> = ({
  icon,
  tooltip,
  css,
  size = 'lg',
  iconColor = 'darkGrayishBlue',
  hoverIconColor = 'darkBlue',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const actualIconColor = useMemo<IColors>(() => {
    return isHovered ? hoverIconColor : iconColor;
  }, [hoverIconColor, iconColor, isHovered]);

  const toggleHover = useCallback(() => {
    setIsHovered(state => !state);
  }, []);

  return (
    <Container
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      css={{
        ...css,
      }}
    >
      <Icon icon={icon} color={actualIconColor} size={size} />
      <Tooltip>{tooltip}</Tooltip>
    </Container>
  );
};
