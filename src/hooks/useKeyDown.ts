'use client';

import { useEffect } from 'react';

export const useKeyDown = (key: string, callback: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === key) {
      e.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
