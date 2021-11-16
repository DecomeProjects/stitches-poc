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

  useEffect(() => {
    if (window) window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <WindowSizeContext.Provider value={{ width, height, isMobile }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
