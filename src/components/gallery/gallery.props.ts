import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface GalleryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[];
}
