import { IProduct } from '@/shared/interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[];
  isHaveOldPrice?: boolean;
  isHaveDiscount?: boolean;
}
