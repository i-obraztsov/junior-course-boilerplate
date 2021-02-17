export const parseQuery = (query, options = {}) => {
  const obj = {};
  const params = query.substr(1).split('&');

  for (let i = 0; i < params.length; i++) {
    let [key, value] = params[i].split('=');

    if (!value) break;

    if (options.parseNumber && !Number.isNaN(+value)) {
      value = +value;
    } else if (options.parseString && value.split(',').length === 1) {
      value = decodeURIComponent(value);
    } else {
      value = value.split(',').map(v => decodeURIComponent(v));
    }

    obj[key] = value;
  }

  return obj;
}

export const stringifyQuery = (obj) => {
  let str = '';

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    if (!value) continue;

    if (Array.isArray(value)) {
      str += `${key}=${value.map(v => encodeURIComponent(v)).join(',')}`;
    } else {
      str += `${key}=${encodeURIComponent(value)}`;
    }

    if (i + 1 < keys.length) {
      str += '&';
    }
  }

  return str;
}
