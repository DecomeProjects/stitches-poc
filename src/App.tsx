import { Details } from '@Components/Details';
import { Header } from '@Components/Header';
import React from 'react';
import { globalStyle } from './styles';

import './services/firebase';

const App: React.FC = () => {
  globalStyle();

  return (
    <>
      <Header />
      <Details />
    </>
  );
};

export default App;
