import { calcDiscount } from './calcDiscount';

export const filterGoods = (data = [], filter) => {
  let goods = data;

  if (filter.category) {
    goods = goods.filter(({ category }) => filter.category === category);
  }

  goods = goods.filter(({ price, sub_price: subPrice }) => {
    const currentDiscount = calcDiscount(subPrice, price);
    return (
      price >= filter.minPrice &&
      price <= filter.maxPrice &&
      filter.discount <= currentDiscount
    );
  });

  return goods;
}
