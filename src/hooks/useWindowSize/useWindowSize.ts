import { useContext } from 'react';

import { WindowSizeContext, IWindowSizeContextData } from '.';

export const useWindowSize = (): IWindowSizeContextData => {
  const context = useContext(WindowSizeContext);

  if (!context)
    throw new Error('useWindowSize must be used within a WindowSizeProvider');

  return context;
};
