const formatter = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0
});

export const toFormat = price => {
  if (!price) return null;

  return formatter.format(price);
}
