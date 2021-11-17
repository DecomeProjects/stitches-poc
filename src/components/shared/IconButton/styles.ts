import { ButtonReset, styled } from '@Styles';

export const Container = styled(ButtonReset, {
  position: 'relative',
});

export const Tooltip = styled('span', {
  position: 'absolute',
  top: '-$xs',
  right: '-$sm',

  height: '$tiny',
  width: '$md',

  color: '$white',
  background: '$orange',
  borderRadius: '$md',

  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '0.875rem',
});
