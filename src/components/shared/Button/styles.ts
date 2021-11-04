import { ButtonReset, styled } from '@Styles';

export const Container = styled(ButtonReset, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$tiny',

  height: '3.5rem',
  width: '17rem',

  background: '$orange',
  borderRadius: '$md',
  transition: 'opacity 0.2s',

  '&:hover': {
    opacity: 0.6,
  },

  variants: {
    fluid: {
      true: {
        width: '100%',
      },
    },
  },
});
