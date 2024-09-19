import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type Appearance = 'gray' | 'white';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  appearance?: Appearance;
}
