import { useCallback, useRef } from 'react';

export const useDebouncedCallback = <
  P extends unknown[],
  T extends (...args: P) => unknown,
>(
  func: T,
  wait: number,
): ((...args: P) => void) => {
  const timeout = useRef<NodeJS.Timeout>({} as NodeJS.Timeout);

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);

      timeout.current = setTimeout(later, wait);
    },
    [func, wait],
  );
};
