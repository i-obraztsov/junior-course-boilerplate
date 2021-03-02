export const uniqBy = (arr = [], prop) => {
  const set = arr.reduce((acc, curr) => acc.add(curr[prop]), new Set());

  return [...set];
}
