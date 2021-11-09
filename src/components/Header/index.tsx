import React, { useCallback, useState } from 'react';
import { IconButton } from '@Components/shared/IconButton';

import avatarImage from '@Assets/images/image-avatar.png';

import { Logo } from './Logo';
import { NavbarMobile } from './NavbarMobile';

import { Avatar, Container, Left, Right } from './styles';

export const Header: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleCloseNavigation = useCallback(() => {
    setIsNavigationOpen(false);
  }, []);

  const handleOpenNavigation = useCallback(() => {
    setIsNavigationOpen(true);
  }, []);

  return (
    <Container>
      <Left>
        <IconButton icon="Menu" onClick={handleOpenNavigation} />
        <a href="/">
          <Logo />
        </a>
      </Left>

      <Right>
        <IconButton icon="Cart" />
        <Avatar src={avatarImage} alt="Avatar" />
      </Right>

      <NavbarMobile
        isOpen={isNavigationOpen}
        handleClose={handleCloseNavigation}
      />
    </Container>
  );
};
