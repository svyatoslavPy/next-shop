import { PRODUCT_TABS } from '@/shared/constants';
import { ProductTabs } from '@/shared/enums/product-tabs.enum';
import { Review } from '@/shared/interfaces/review.interface';
import { ITab } from '@/shared/interfaces/tab.interface';

export const getOldPrice = (price: number, discount: number) => {
  const percentage = (price / 100) * discount;
  const result = price - percentage;

  return result;
};

export const getRatingByReviews = async <T extends Review>(reviews: T[]) => {
  let sum = 0;

  for (const review of reviews) {
    sum += review.rating;
  }

  return sum / reviews.length;
};

export const getTabsWithCountReviews = <T extends ITab>(
  tabs: T[],
  countReviews: number,
) => {
  return tabs.map((item) => {
    if (item.name === ProductTabs.Reviews) {
      return { ...item, name: `Отзывы (${countReviews})` };
    }

    return item;
  });
};

export const getOnlyWord = (str: string) => {
  const preparedStr = str.split('');
  const filteredFromBrackets = preparedStr.filter(
    (item) => item !== '(' && item !== ')',
  );

  const result = filteredFromBrackets
    .filter((item) => !parseInt(item))
    .join('')
    .trim();

  return result;
};

export const getIdFromProductTabs = (tab: ProductTabs) => {
  switch (tab) {
    case ProductTabs.Reviews:
      return PRODUCT_TABS.find((item) => item.name === ProductTabs.Reviews)?.id;
    case ProductTabs.Description:
      return PRODUCT_TABS.find((item) => item.name === ProductTabs.Description)
        ?.id;
    default:
      return;
  }
};
