export const calcDiscount = (subPrice, price) => {
  if (Number.isFinite(subPrice) && Number.isFinite(price)) {
    return ((subPrice - price) * 100) / subPrice;
  }

  return 0;
}
