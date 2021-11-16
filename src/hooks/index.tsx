import React from 'react';

import { CartProvider } from './useCart';
import { FirebaseProvider } from './useFirebase';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseProvider>
      <CartProvider>{children}</CartProvider>
    </FirebaseProvider>
  );
};
