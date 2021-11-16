import React from 'react';

import { Header } from '@Components/Header';
import { Gallery } from '@Components/Gallery';
import { Details } from '@Components/Details';
import { PopoverModalProvider } from '@Components/shared/PopoverModal/hooks';

export const Overview: React.FC = () => {
  return (
    <>
      <PopoverModalProvider>
        <Header />
      </PopoverModalProvider>
      <Gallery />
      <Details />
    </>
  );
};
