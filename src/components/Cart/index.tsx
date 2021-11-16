import React from 'react';

import { useCart } from '@Hooks/Cart';

import itemImage from '@Assets/images/image-product-1-thumbnail.jpg';

import { Button } from '@Components/shared/Button';
import { Typography } from '@Components/shared/Typography';
import { IconButton } from '@Components/shared/IconButton';

import { formatMoney } from '@Utils/formatMoney';

import { CartItem, Container, PriceContainer } from './styles';

export const Cart: React.FC = () => {
  const { items, isEmpty, remove } = useCart();

  return (
    <Container>
      {isEmpty ? (
        <Typography weight="bold">Your cart is empty</Typography>
      ) : (
        <>
          <ul>
            {items.map(i => (
              <CartItem key={i.id}>
                <img src={itemImage} alt={i.name} />

                <div>
                  <Typography color="grayishBlue" truncated>
                    {i.name}
                  </Typography>

                  <PriceContainer>
                    <Typography color="grayishBlue">
                      {formatMoney(i.value * i.discount)} x {i.quantity}
                    </Typography>
                    <Typography weight="bold">
                      {formatMoney(i.value * i.discount * i.quantity)}
                    </Typography>
                  </PriceContainer>
                </div>

                <IconButton
                  icon="Delete"
                  iconColor="grayishBlue"
                  hoverIconColor="darkGrayishBlue"
                  onClick={() => remove(i.id)}
                  css={{
                    marginLeft: '$base',
                  }}
                />
              </CartItem>
            ))}
          </ul>

          <Button label="Checkout" fluid />
        </>
      )}
    </Container>
  );
};
