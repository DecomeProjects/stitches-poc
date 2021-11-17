import React, { FormEvent, useCallback, useState } from 'react';

import { useCart } from '@Hooks/useCart';
import { useWindowSize } from '@Hooks/useWindowSize';

import { Button } from '@Components/shared/Button';
import { Chip } from '@Components/shared/Chip';
import { NumberInput } from '@Components/shared/NumberInput';
import { Typography } from '@Components/shared/Typography';

import { Container, Form, PaymentInfo } from './styles';

export const Details: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const { add } = useCart();
  const { isMobile } = useWindowSize();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      add({
        id: '1',
        name: 'Fall Limited Edition Sneakers',
        discount: 0.5,
        quantity,
        value: 250,
      });
    },
    [add, quantity],
  );

  const handleOnChange = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  return (
    <Container>
      <Typography
        color="orange"
        letterSpacing="widest"
        size={isMobile ? 'xs' : 'sm'}
        weight="bold"
        uppercase
      >
        sneaker company
      </Typography>

      <Typography
        size={isMobile ? 'lg' : 'xl'}
        weight="bold"
        tag="h2"
        css={{
          marginTop: isMobile ? '$tiny' : '$md',
        }}
      >
        Fall Limited Edition Sneakers
      </Typography>

      <Typography
        color="darkGrayishBlue"
        letterSpacing={isMobile ? 'tight' : 'normal'}
        css={{
          marginTop: isMobile ? '$base' : '$xl',
        }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Typography>

      <PaymentInfo>
        <div>
          <Typography size="lg" weight="bold">
            $125.00
          </Typography>
          <Chip label="50%" />
        </div>

        <Typography color="grayishBlue" weight="bold" lineThrough>
          $250.00
        </Typography>
      </PaymentInfo>

      <Form onSubmit={handleSubmit}>
        <NumberInput
          name="quantity"
          handleChange={handleOnChange}
          fluid={isMobile}
        />

        <Button
          type="submit"
          label="Add to cart"
          icon="Cart"
          fluid={isMobile}
        />
      </Form>
    </Container>
  );
};
