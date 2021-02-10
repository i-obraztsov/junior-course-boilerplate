export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const [data, rest] = args;

    // Немного примитивная генерация ключа
    const key = JSON.stringify(rest);
    if (!cache.has(key)) {
      const result = fn(data, rest);

      cache.set(key, result);
      return result;
    }

    return cache.get(key);
  };
};
