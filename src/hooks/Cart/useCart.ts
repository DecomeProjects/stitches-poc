import { useContext } from 'react';

import { CartContext, ICartContextData } from '.';

export const useCart = (): ICartContextData => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used within a CartProvider');

  return context;
};
