import React from 'react';

import { FirebaseProvider } from './useFirebase';
import { WindowSizeProvider } from './useWindowSize';
import { CartProvider } from './useCart';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <WindowSizeProvider>
        <CartProvider>{children}</CartProvider>
      </WindowSizeProvider>
    </FirebaseProvider>
  );
};
