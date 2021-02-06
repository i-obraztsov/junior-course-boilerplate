export const parseQuery = (query) => {
  let [key, value] = query.split('=');

  if (!query || !value) return {};

  value = value.split('&').map(v => decodeURIComponent(v));

  return { [key]: value }
}

export const stringifyQuery = (obj) => {
  let str = '';

  for (const [key, value] of Object.entries(obj)) {
    str+=`${key}=${value.map(v => encodeURIComponent(v)).join('&')}`
  }

  return str;
}
