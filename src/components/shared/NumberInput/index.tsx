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
  handleChange?: (value: number) => void;
};

const BaseNumberInput: ForwardRefRenderFunction<
  HTMLInputElement,
  INumberInputProps
> = ({ name, min = 0, max, fluid = false, handleChange, ...rest }, ref) => {
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
    if (handleChange) handleChange(value);
  }, [value, handleChange]);

  return (
    <Container role="spinbutton" fluid={fluid}>
      <IconButton
        type="button"
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
        type="button"
        icon="Plus"
        iconColor="lightOrange"
        hoverIconColor="orange"
        onClick={add}
      />
    </Container>
  );
};

export const NumberInput = forwardRef(BaseNumberInput);
