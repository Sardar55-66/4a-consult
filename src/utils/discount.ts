export const calcDiscount = (price: number, full: number) => {
  if (!full) return 0;
  return Math.round(100 - (price / full) * 100);
};
