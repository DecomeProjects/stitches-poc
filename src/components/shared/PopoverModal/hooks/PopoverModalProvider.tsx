import React, { useCallback, useState } from 'react';

import { InPortal } from '@Components/shared/InPortal';
import { IPopoverModalProps, PopoverModalContext } from '.';
import { PopoverModal } from '..';
import { ModalOverlay } from '../styles';

export const PopoverModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverModalData, setPopoverModalData] = useState<IPopoverModalProps>(
    {} as IPopoverModalProps,
  );

  const openModal = useCallback((data: IPopoverModalProps) => {
    setPopoverModalData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setPopoverModalData({} as IPopoverModalProps);
    setIsOpen(false);
  }, []);

  return (
    <PopoverModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <InPortal id="modal_container">
        {isOpen && (
          <>
            <ModalOverlay onClick={closeModal} />
            <PopoverModal {...popoverModalData} />
          </>
        )}
      </InPortal>
    </PopoverModalContext.Provider>
  );
};
