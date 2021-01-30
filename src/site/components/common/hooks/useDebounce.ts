import { useCallback, useEffect, useRef } from 'react';

/**
 * Debounce callback hook
 *
 * @param callback debounce action
 * @param wait wait time in ms
 * @return debounde trigger function
 */
export function useDebounce<T extends ((...args: any[]) => void) | (() => void)>(
  callback: T,
  wait?: number,
): [(...args: Parameters<T>) => void] {
  // Reference of running timer
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // Clear timer
  const clearTimer = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  // Clear timer on unmount
  useEffect(() => clearTimer, []);

  // Start timer
  const debounceCallback = useCallback(
    (...args: any[]) => {
      clearTimer();
      if (wait) {
        timeout.current = setTimeout(() => callback(...args), wait);
      }
    },
    [callback, wait],
  );

  return [debounceCallback];
}
