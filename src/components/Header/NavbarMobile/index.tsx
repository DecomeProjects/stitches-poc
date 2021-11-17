import React, { useEffect } from 'react';

import { useWindowSize } from '@Hooks/useWindowSize';

import { IconButton } from '@Components/shared/IconButton';
import { InPortal } from '@Components/shared/InPortal';
import { Typography } from '@Components/shared/Typography';

import { Container, List, NavbarOverlay } from './styles';

type INavbarMobileProps = {
  isOpen: boolean;
  handleClose: () => void;
};

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

export const NavbarMobile: React.FC<INavbarMobileProps> = ({
  isOpen,
  handleClose,
}) => {
  const { isDesktop } = useWindowSize();

  useEffect(() => {
    if (isDesktop) handleClose();
  }, [isDesktop, handleClose]);

  return (
    <InPortal id="navbar_container">
      <NavbarOverlay isOpen={isOpen} onClick={handleClose} />

      <Container isOpen={isOpen}>
        <div>
          <IconButton icon="Close" onClick={handleClose} />
        </div>

        <List>
          {links.map(item => (
            <li key={item.label}>
              <a href={item.path}>
                <Typography weight="bold">{item.label}</Typography>
              </a>
            </li>
          ))}
        </List>
      </Container>
    </InPortal>
  );
};
