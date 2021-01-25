export const inputNumberMask = (value = '') => {
  const n = value.replace(/\D/g, '');

  return n.length ? parseInt(n, 10) : 0;
}
