import React from 'react';
import { globalStyle } from './styles/global';

const App: React.FC = () => {
  globalStyle();

  return <h1>Olá mundo!</h1>;
};

export default App;
