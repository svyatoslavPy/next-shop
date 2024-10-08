'use client';

import { useSearchParams } from 'next/navigation';

export function useCreateQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params;
  };

  return { createQueryString };
}
