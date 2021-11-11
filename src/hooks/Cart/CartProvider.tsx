import React, { useCallback, useState } from 'react';

import { CartContext } from './context';

import { IItem } from './types';

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IItem[]>([]);

  const add = useCallback(
    (item: IItem) => {
      const alreadyOnCart = items.some(i => i.id === item.id);

      if (!alreadyOnCart) setItems(state => [...state, item]);
    },
    [items],
  );

  const remove = useCallback(
    (id: string) => {
      const filteredItems = items.filter(item => item.id !== id);

      setItems(filteredItems);
    },
    [items],
  );

  return (
    <CartContext.Provider value={{ items, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};
