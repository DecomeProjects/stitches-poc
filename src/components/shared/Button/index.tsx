import React, { ButtonHTMLAttributes } from 'react';

import { Icon } from '../Icon';
import { IIConsList } from '../Icon/assets';
import { Typography } from '../Typography';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  icon?: IIConsList;
  fluid?: boolean;
};

export const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  fluid = false,
  ...rest
}) => {
  return (
    <Container fluid={fluid} {...rest}>
      {icon && <Icon icon={icon} color="paleOrange" />}
      <Typography color="paleOrange" weight="bold" tag="span">
        {label}
      </Typography>
    </Container>
  );
};
