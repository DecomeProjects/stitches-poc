import React, {
  ButtonHTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { IColors, ISizes, IStitchesConfigCSS } from '@Styles';

import { Icon } from '../Icon';
import { IIConsList } from '../Icon/assets';

import { Container, Tooltip } from './styles';

type IIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IIConsList;
  tooltip?: string | number;
  css?: IStitchesConfigCSS;
  size?: ISizes;
  iconColor?: IColors;
  hoverIconColor?: IColors;
};

const IconButtonBase: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IIconButtonProps
> = (
  {
    icon,
    tooltip,
    css,
    size = 'lg',
    iconColor = 'darkGrayishBlue',
    hoverIconColor = 'darkBlue',
    ...rest
  },
  ref,
) => {
  const [isHovered, setIsHovered] = useState(false);

  const actualIconColor = useMemo<IColors>(() => {
    return isHovered ? hoverIconColor : iconColor;
  }, [hoverIconColor, iconColor, isHovered]);

  const toggleHover = useCallback(() => {
    setIsHovered(state => !state);
  }, []);

  return (
    <Container
      ref={ref}
      {...rest}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      css={{
        ...css,
      }}
    >
      <Icon icon={icon} color={actualIconColor} size={size} />
      {!!tooltip && <Tooltip>{tooltip}</Tooltip>}
    </Container>
  );
};

export const IconButton = forwardRef(IconButtonBase);
