import React from 'react';
import { IconButton } from '@Components/shared/IconButton';

import avatarImage from '@Assets/images/image-avatar.png';

import { Logo } from './Logo';

import { Avatar, Container, Left, Right } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <IconButton icon="Menu" />
        <a href="/">
          <Logo />
        </a>
      </Left>

      <Right>
        <IconButton icon="Cart" />
        <Avatar src={avatarImage} alt="Avatar" />
      </Right>
    </Container>
  );
};
