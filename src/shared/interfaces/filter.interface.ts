import { Category } from './filter-category.interface';

export interface Filter {
  categories: Category[];
  minPrice: number;
  maxPrice: number;
}
