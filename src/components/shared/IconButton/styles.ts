import { ButtonReset, styled } from '@/styles';

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

  fontSize: '$sm',
  fontWeight: '$bold',
  lineHeight: '0.875rem',
});