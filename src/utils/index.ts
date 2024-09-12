export const getOldPrice = (price: number, discount: number) => {
  const percentage = (price / 100) * discount;
  const result = price - percentage;

  return result;
};
