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
  css?: IStitchesConfigCSS;
};

export const PopoverModal: React.FC<IExtendsPopoverModalProps> = ({
  content,
  title,
  maxWidth = '22.5rem',
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
    } = target.getBoundingClientRect();

    let spacingFromContainer = 32;
    const lateralSpacing = 8;

    const bottom = 0;

    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      if (left + width + lateralSpacing > window.innerWidth) {
        const spacing = (window.innerWidth - width) / 2;
        left = spacing;
      }

      if (
        top + height > window.innerHeight &&
        topDistance > height + lateralSpacing
      ) {
        spacingFromContainer *= -1;
        top = topDistance - height;
      }
    }

    setPosition({
      top: top + spacingFromContainer,
      right: lateralSpacing,
      bottom,
      left: Math.max(left, lateralSpacing),
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
      css={{
        maxWidth,
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
