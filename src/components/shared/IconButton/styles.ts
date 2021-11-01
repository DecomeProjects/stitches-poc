import { ButtonReset, styled } from '../../../styles';

export const Container = styled(ButtonReset, {
  position: 'relative',
});

export const Tooltip = styled('span', {
  position: 'absolute',
  top: '-$xs',
  right: '-$sm',
  padding: '1px $sm',
  background: '$orange',
  color: '$white',
  borderRadius: '$md',

  fontSize: '$sm',
  lineHeight: '0.625rem',
});
