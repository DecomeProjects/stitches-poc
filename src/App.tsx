import React from 'react';
import { IconButton } from './components/shared/IconButton';
import { globalStyle } from './styles';

const App: React.FC = () => {
  globalStyle();

  return (
    <IconButton
      icon="Cart"
      tooltip="1"
      iconColor="darkGrayishBlue"
      hoverIconColor="darkBlue"
    />
  );
};

export default App;
