import React, { FormEvent, useCallback, useState } from 'react';

import { Button } from '@Components/shared/Button';
import { Chip } from '@Components/shared/Chip';
import { NumberInput } from '@Components/shared/NumberInput';
import { Typography } from '@Components/shared/Typography';

import { Container, Form, PaymentInfo } from './styles';

export const Details: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(quantity);
    },
    [quantity],
  );

  const handleOnChange = useCallback((value: number) => {
    setQuantity(value);
  }, []);

  return (
    <Container>
      <Typography
        color="orange"
        letterSpacing="widest"
        size="xs"
        weight="bold"
        uppercase
      >
        sneaker company
      </Typography>

      <Typography
        size="lg"
        weight="bold"
        tag="h2"
        css={{
          marginTop: '$tiny',
        }}
      >
        Fall Limited Edition Sneakers
      </Typography>

      <Typography
        color="darkGrayishBlue"
        letterSpacing="tight"
        css={{
          marginTop: '$base',
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
        <NumberInput name="quantity" handleChange={handleOnChange} fluid />

        <Button label="Add to cart" icon="Cart" fluid />
      </Form>
    </Container>
  );
};
