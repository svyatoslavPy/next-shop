import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  appearance: 'white' | 'black' | 'hidden';
  size: 'full' | 'none';
  arrow?: 'left' | 'right' | 'none';
  icon?: 'cart' | 'favorite';
}
