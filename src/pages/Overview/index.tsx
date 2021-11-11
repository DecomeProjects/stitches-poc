import React from 'react';

import { Header } from '@Components/Header';
import { Gallery } from '@Components/Gallery';
import { Details } from '@Components/Details';

export const Overview: React.FC = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Details />
    </>
  );
};
