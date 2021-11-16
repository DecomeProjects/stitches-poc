import { createContext } from 'react';

import { IWindowSizeContextData } from '.';

export const WindowSizeContext = createContext<IWindowSizeContextData>(
  {} as IWindowSizeContextData,
);
