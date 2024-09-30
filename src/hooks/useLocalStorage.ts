'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const getStorageValue = <T>(key: string, defaultValue: T): T => {
  const saved = window.localStorage.getItem(key);
  const initial = JSON.parse(String(saved));
  return initial || defaultValue;
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
