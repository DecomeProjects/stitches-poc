import React, { useCallback, useMemo, useState } from 'react';

import { CartContext } from './context';

import { IItem } from './types';

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IItem[]>([]);

  const isEmpty = useMemo(() => !items.length, [items]);

  const add = useCallback(
    (item: IItem) => {
      if (!item.quantity) return;

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
    <CartContext.Provider value={{ items, isEmpty, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};
