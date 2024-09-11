import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  appearance: 'white' | 'black';
  size: 'small' | 'normal';
  arrow?: 'left' | 'right' | 'none';
}
