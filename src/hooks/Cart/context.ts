import { createContext } from 'react';

import { ICartContextData } from './types';

export const CartContext = createContext<ICartContextData>(
  {} as ICartContextData,
);
