import React from 'react';
import './services/firebase';

import { Overview } from '@Pages/Overview';

import { globalStyle } from './styles';

const App: React.FC = () => {
  globalStyle();

  return <Overview />;
};

export default App;
