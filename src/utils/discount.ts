export const calcDiscount = (price: number, full: number) => {
    return Math.round(100 - (price / full) * 100);
  };