import { createStore } from 'redux';
import products from '../products.json';
import { findMinAndMax } from '../utils/findMinAndMax';
import { uniqBy } from '../utils/uniqBy';

import reducer from '../reducers';

const { min, max } = findMinAndMax(products);
const allCategories = uniqBy(products, 'category');

export const initState = {
  minPrice: min,
  maxPrice: max,
  discount: 0,
  allCategories,
  activeCategories: [],
  products,
}

export const store = createStore(reducer, initState);
