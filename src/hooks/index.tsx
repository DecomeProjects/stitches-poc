import React from 'react';
import { CartProvider } from './Cart';

export const AppProvider: React.FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
