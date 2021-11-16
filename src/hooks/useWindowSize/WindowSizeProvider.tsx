import { useDebouncedCallback } from '@Hooks/useDebouncedCallback';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { WindowSizeContext } from '.';

const initialResolution = {
  width: 360,
  height: 640,
};

export const WindowSizeProvider: React.FC = ({ children }) => {
  const [width, setWidth] = useState(initialResolution.width);
  const [height, setHeight] = useState(initialResolution.height);

  const isMobile = useMemo(() => width < 768, [width]);

  const handleWindowResize = useCallback(() => {
    const { innerWidth, innerHeight } = window;

    if (width !== innerWidth) setWidth(innerWidth);

    if (height !== innerHeight) setHeight(innerHeight);
  }, [width, height]);

  const debouncedResizeHandler = useDebouncedCallback(handleWindowResize, 200);

  useEffect(() => {
    if (window) window.addEventListener('resize', debouncedResizeHandler);

    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, [debouncedResizeHandler]);

  return (
    <WindowSizeContext.Provider value={{ width, height, isMobile }}>
      {children}
    </WindowSizeContext.Provider>
  );
};