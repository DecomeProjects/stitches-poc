import { styled } from '@Styles';

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  padding: '$md $lg $lg',
});

const Section = styled('section', {
  display: 'flex',
});

export const Left = styled(Section, {
  gap: '$base',
});

export const Right = styled(Section, {
  gap: '$md',
});

export const Avatar = styled('img', {
  width: '$lg',
  height: '$lg',
  borderRadius: '$sm',
  objectFit: 'contain',
});
