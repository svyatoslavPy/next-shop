import { Appearance } from '@/shared/ui/input/input.props';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  directionIcon: 'left' | 'right';
  appearance?: Appearance;
  placeholder?: string;
}
