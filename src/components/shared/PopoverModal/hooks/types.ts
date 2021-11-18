import { ReactNode } from 'react';

export type IPopoverPosition = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export interface IPopoverModalProps {
  target: Element;
  content: ReactNode;
  title?: string;
  maxWidth?: string;
  minWidth?: string;
}

export interface IPopoverModalContextData {
  isOpen: boolean;
  openModal(data: IPopoverModalProps): void;
  closeModal(): void;
}
