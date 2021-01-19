export const findMinAndMax = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = -1;

  for(const { price } of arr) {
    min = Math.min(min, price);
    max = Math.max(max, price);
  }
  return { min, max };
}
