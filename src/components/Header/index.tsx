import React, { useCallback, useRef, useState } from 'react';

import avatarImage from '@Assets/images/image-avatar.png';

import { useWindowSize } from '@Hooks/useWindowSize';
import { useCart } from '@Hooks/useCart';

import { usePopoverModal } from '@Components/shared/PopoverModal/hooks';
import { Cart } from '@Components/Cart';
import { IconButton } from '@Components/shared/IconButton';
import { Typography } from '@Components/shared/Typography';

import { Logo } from './Logo';
import { NavbarMobile } from './NavbarMobile';

import { Avatar, Container, Left, Navigation, Right } from './styles';

const links = [
  {
    label: 'Collections',
    path: '/',
  },
  {
    label: 'Men',
    path: '/',
  },
  {
    label: 'Women',
    path: '/',
  },
  {
    label: 'About',
    path: '/',
  },
  {
    label: 'Contact',
    path: '/',
  },
];

export const Header: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { openModal } = usePopoverModal();
  const { isDesktop } = useWindowSize();
  const { totalOfItems } = useCart();

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
        {!isDesktop && (
          <IconButton icon="Menu" onClick={handleOpenNavigation} />
        )}
        <a href="/">
          <Logo />
        </a>

        {isDesktop && (
          <Navigation>
            {links.map(link => (
              <li key={link.label}>
                <a href={link.path}>
                  <Typography color="darkGrayishBlue" letterSpacing="tight">
                    {link.label}
                  </Typography>
                </a>
              </li>
            ))}
          </Navigation>
        )}
      </Left>

      <Right>
        <IconButton
          ref={buttonRef}
          icon="Cart"
          onClick={handleOpenCart}
          tooltip={totalOfItems}
        />
        <Avatar src={avatarImage} alt="Avatar" />
      </Right>

      <hr />

      <NavbarMobile
        isOpen={isNavigationOpen}
        handleClose={handleCloseNavigation}
      />
    </Container>
  );
};
