export interface IProduct {
  name: string;
  price: number;
  discount?: number;
  description: string[];
  categoryId: number;
  sku: number;
  reviews: string[];
  images: string[];
}
