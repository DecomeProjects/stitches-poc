import { createContext } from 'react';
import { IPopoverModalContextData } from '.';

export const PopoverModalContext = createContext<IPopoverModalContextData>(
  {} as IPopoverModalContextData,
);
