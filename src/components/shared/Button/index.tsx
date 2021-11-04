import React from 'react';
import { Icon } from '../Icon';
import { IIConsList } from '../Icon/assets';
import { Typography } from '../Typography';
import { Container } from './styles';

type IButtonProps = {
  label: string;
  icon?: IIConsList;
  fluid?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  fluid = false,
  onClick,
}) => {
  return (
    <Container fluid={fluid} onClick={onClick}>
      {icon && <Icon icon={icon} color="paleOrange" />}
      <Typography color="paleOrange" weight="bold" tag="span">
        {label}
      </Typography>
    </Container>
  );
};
