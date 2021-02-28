export const filterGoods = (data = [], filter) => {
  let goods = data;

  if (filter.category) {
    goods = goods.filter(({ category }) => filter.category === category);
  }

  goods = goods.filter(({ price, discount }) => {
    return (
      price >= filter.minPrice &&
      price <= filter.maxPrice &&
      filter.discount <= discount
    );
  });

  return goods;
}
