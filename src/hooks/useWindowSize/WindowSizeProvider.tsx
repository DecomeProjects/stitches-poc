import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useDebouncedCallback } from '@Hooks/useDebouncedCallback';

import { WindowSizeContext } from '.';

const initialResolution = {
  width: 360,
  height: 640,
};

export const WindowSizeProvider: React.FC = ({ children }) => {
  const [width, setWidth] = useState(initialResolution.width);
  const [height, setHeight] = useState(initialResolution.height);

  const isMobile = useMemo(() => width < 768, [width]);
  const isTablet = useMemo(() => width >= 768 && width < 992, [width]);
  const isDesktop = useMemo(() => width >= 992, [width]);

  const handleWindowResize = useCallback(() => {
    const { innerWidth, innerHeight } = window;

    if (width !== innerWidth) setWidth(innerWidth);

    if (height !== innerHeight) setHeight(innerHeight);
  }, [width, height]);

  const debouncedResizeHandler = useDebouncedCallback(handleWindowResize, 200);

  useEffect(() => {
    debouncedResizeHandler();

    if (window) window.addEventListener('resize', debouncedResizeHandler);

    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, [debouncedResizeHandler]);

  return (
    <WindowSizeContext.Provider
      value={{ width, height, isMobile, isTablet, isDesktop }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
};
