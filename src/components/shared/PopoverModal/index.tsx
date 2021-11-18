import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IStitchesConfigCSS } from '@Styles';

import { useDebouncedCallback } from '@Hooks/useDebouncedCallback';

import { Typography } from '../Typography';
import { IPopoverModalProps, IPopoverPosition } from './hooks';

import { Container, ModalHeader, ModalMain } from './styles';

type IExtendsPopoverModalProps = IPopoverModalProps & {
  isOpen: boolean;
  css?: IStitchesConfigCSS;
};

export const PopoverModal: React.FC<IExtendsPopoverModalProps> = ({
  isOpen,
  content,
  title,
  maxWidth = '22.5rem',
  minWidth = '22.5rem',
  target,
  css,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<IPopoverPosition>({});

  const handlePosition = useCallback(() => {
    let {
      // eslint-disable-next-line prefer-const
      top: topDistance,
      bottom: top,
      left,
      // eslint-disable-next-line prefer-const
      width: targetWidth,
    } = target.getBoundingClientRect();

    let spacingFromContainer = 32;
    const lateralSpacing = 24;

    const bottom = 0;

    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      const isBiggerOnLeft =
        left + width / 2 + targetWidth / 2 + lateralSpacing > window.innerWidth;

      if (isBiggerOnLeft) {
        left = 0;
      } else {
        left = left - width / 2 + targetWidth / 2;
      }

      const isBiggerOnRight = lateralSpacing * 2 + width > window.innerWidth;

      if (isBiggerOnRight) {
        left = Math.abs((width - window.innerWidth) / 2);
      }

      const isBiggerOnTop = top + height > window.innerHeight;
      const isShorterOnBottom = topDistance > height + lateralSpacing;

      if (isBiggerOnTop && isShorterOnBottom) {
        spacingFromContainer *= -1;
        top = topDistance - height;
      }
    }

    setPosition({
      top: top + spacingFromContainer,
      right: left || lateralSpacing,
      bottom,
      left,
    });
  }, [target]);

  const cssPosition = useMemo(() => {
    const pos = {};

    Object.entries(position).forEach(([key, value]) => {
      if (value) Object.assign(pos, { [key]: value });
    });

    return pos;
  }, [position]);

  const debouncedResizeHandler = useDebouncedCallback(handlePosition, 200);

  useEffect(() => {
    debouncedResizeHandler();

    if (window) window.addEventListener('resize', debouncedResizeHandler);

    return () => window.removeEventListener('resize', debouncedResizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      ref={containerRef}
      hidden={!isOpen}
      css={{
        maxWidth,
        minWidth,
        ...cssPosition,
        ...css,
      }}
    >
      {title && (
        <ModalHeader>
          <Typography weight="bold">{title}</Typography>
        </ModalHeader>
      )}

      <ModalMain>{content}</ModalMain>
    </Container>
  );
};
