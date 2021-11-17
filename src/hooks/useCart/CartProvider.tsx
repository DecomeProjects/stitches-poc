import React, { useCallback, useMemo, useState } from 'react';

import { useFirebase } from '@Hooks/useFirebase';

import { CartContext, IItem } from '.';

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IItem[]>([]);

  const { logEvent } = useFirebase();

  const isEmpty = useMemo(() => !items.length, [items]);

  const totalOfItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items],
  );

  const add = useCallback(
    (item: IItem) => {
      if (!item.quantity) return;

      const alreadyOnCart = items.some(i => i.id === item.id);

      if (!alreadyOnCart) {
        setItems(state => [...state, item]);

        logEvent('add_to_cart', {
          currency: 'USD',
          value: item.value * item.discount * item.quantity,
          items: [
            {
              item_id: item.id,
              item_name: item.name,
              price: item.value,
              discount: item.discount,
              quantity: item.quantity,
            },
          ],
        });
      }
    },
    [items, logEvent],
  );

  const remove = useCallback(
    (id: string) => {
      const item = items.find(i => i.id === id);

      if (item) {
        const filteredItems = items.filter(i => i.id !== id);

        setItems(filteredItems);

        logEvent('remove_from_cart', {
          currency: 'USD',
          value: item.value * item.discount * item.quantity,
          items: [
            {
              item_id: item.id,
              item_name: item.name,
              price: item.value,
              discount: item.discount,
              quantity: item.quantity,
            },
          ],
        });
      }
    },
    [items, logEvent],
  );

  return (
    <CartContext.Provider value={{ items, totalOfItems, isEmpty, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};
