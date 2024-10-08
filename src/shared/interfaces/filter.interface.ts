import { ICategory } from './filter-category.interface';

export interface IFilter {
  categories: ICategory[];
  minPrice: number;
  maxPrice: number;
}
