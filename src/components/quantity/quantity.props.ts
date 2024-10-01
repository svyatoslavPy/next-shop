import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface QuantityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}
