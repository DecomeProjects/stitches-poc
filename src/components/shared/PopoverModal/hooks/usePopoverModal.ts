import { useContext } from 'react';

import { IPopoverModalContextData, PopoverModalContext } from '.';

export const usePopoverModal = (): IPopoverModalContextData => {
  const context = useContext(PopoverModalContext);

  if (!context)
    throw new Error(
      'usePopoverModal must be used within a PopoverModalProvider',
    );

  return context;
};
