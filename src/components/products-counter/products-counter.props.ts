import { CartIcon as cart } from '@/shared/icons/cart';
import { FavoriteIcon as favorite } from '@/shared/icons/favorite';

export const icons = {
  cart,
  favorite,
};

type Icon = keyof typeof icons;

export interface ProductsCounterProps {
  icon: Icon;
  count?: number;
}
