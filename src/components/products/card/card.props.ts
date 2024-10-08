export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  discount?: number;
  isHaveOldPrice?: boolean;
  isHaveDiscount?: boolean;
}
