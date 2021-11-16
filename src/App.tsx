import React from 'react';
import './services/firebase';

import { AppProvider } from '@Hooks';
import { Overview } from '@Pages/Overview';

import { globalStyle } from './styles';

const App: React.FC = () => {
  globalStyle();

  return (
    <AppProvider>
      <Overview />
    </AppProvider>
  );
};

export default App;
