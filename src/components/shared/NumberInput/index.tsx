import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import { Container } from './styles';

type INumberInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  min?: number;
  max?: number;
  fluid?: boolean;
  onChange?: (value: number) => void;
};

const BaseNumberInput: ForwardRefRenderFunction<
  HTMLInputElement,
  INumberInputProps
> = ({ name, min = 0, max, fluid = false, onChange, ...rest }, ref) => {
  const [value, setValue] = useState(min);

  const add = useCallback(() => {
    if (max && value >= max) {
      return;
    }

    setValue(value + 1);
  }, [max, value]);

  const subtract = useCallback(() => {
    if (value > min) {
      setValue(value - 1);
    }
  }, [min, value]);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value, onChange]);

  return (
    <Container role="spinbutton" fluid={fluid}>
      <IconButton
        icon="Minus"
        iconColor="lightOrange"
        hoverIconColor="orange"
        onClick={subtract}
      />

      <input
        ref={ref}
        id={name}
        name={name}
        value={value}
        type="number"
        readOnly
        {...rest}
      />

      <Typography letterSpacing="wider" tag="span" weight="bold">
        {value}
      </Typography>

      <IconButton
        icon="Plus"
        iconColor="lightOrange"
        hoverIconColor="orange"
        onClick={add}
      />
    </Container>
  );
};

export const NumberInput = forwardRef(BaseNumberInput);
