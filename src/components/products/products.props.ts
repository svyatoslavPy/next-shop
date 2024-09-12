import { IProduct } from '@/shared/interfaces/product.interface';

export interface ProductsProps {
  products: IProduct[];
  isHaveOldPrice?: boolean;
  isHaveDiscount?: boolean;
}
