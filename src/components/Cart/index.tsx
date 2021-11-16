import React from 'react';

import { useCart } from '@Hooks/Cart';

import { Typography } from '@Components/shared/Typography';
import { Container } from './styles';

export const Cart: React.FC = () => {
  const { isEmpty } = useCart();

  return (
    <Container>
      {isEmpty ? (
        <Typography weight="bold">Your cart is empty</Typography>
      ) : (
        <h5>Not empty</h5>
      )}
    </Container>
  );
};
