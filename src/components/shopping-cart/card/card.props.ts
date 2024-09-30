import { IProduct } from '@/shared/interfaces/product.interface';

export interface ShoppingCardProps extends Pick<IProduct, 'sku' | 'quantity'> {
  onIncreaseQuantity: (id: number) => void;
  onDecreaseQuantity: (id: number) => void;
}
