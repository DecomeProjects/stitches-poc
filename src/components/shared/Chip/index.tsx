import React from 'react';
import { Typography } from '../Typography';
import { Container } from './styles';

type IChipProps = {
  label: string;
};

export const Chip: React.FC<IChipProps> = ({ label }) => {
  return (
    <Container>
      <Typography
        color="orange"
        lineHeight="sm"
        size="base"
        tag="span"
        weight="bold"
      >
        {label}
      </Typography>
    </Container>
  );
};
