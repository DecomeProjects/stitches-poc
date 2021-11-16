import React, { useCallback, useRef, useState } from 'react';

import avatarImage from '@Assets/images/image-avatar.png';

import { Cart } from '@Components/Cart';
import { IconButton } from '@Components/shared/IconButton';
import { usePopoverModal } from '@Components/shared/PopoverModal/hooks';

import { Logo } from './Logo';
import { NavbarMobile } from './NavbarMobile';

import { Avatar, Container, Left, Right } from './styles';

export const Header: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { openModal } = usePopoverModal();

  const handleCloseNavigation = useCallback(() => {
    setIsNavigationOpen(false);
  }, []);

  const handleOpenNavigation = useCallback(() => {
    setIsNavigationOpen(true);
  }, []);

  const handleOpenCart = useCallback(() => {
    if (buttonRef.current)
      openModal({
        target: buttonRef.current,
        content: <Cart />,
        title: 'Cart',
      });
  }, [openModal]);

  return (
    <Container>
      <Left>
        <IconButton icon="Menu" onClick={handleOpenNavigation} />
        <a href="/">
          <Logo />
        </a>
      </Left>

      <Right>
        <IconButton ref={buttonRef} icon="Cart" onClick={handleOpenCart} />
        <Avatar src={avatarImage} alt="Avatar" />
      </Right>

      <NavbarMobile
        isOpen={isNavigationOpen}
        handleClose={handleCloseNavigation}
      />
    </Container>
  );
};
