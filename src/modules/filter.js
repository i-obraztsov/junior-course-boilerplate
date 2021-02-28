import products from '../products.json';
import { findMinAndMax } from '../utils/findMinAndMax';
import { uniqBy } from '../utils/uniqBy';

const { min, max } = findMinAndMax(products);
const allCategories = uniqBy(products, 'category');

/* Actions */
const SET_FILTER = 'filter/SET_FILTER';

/* Action creators */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

/* Selectors */
export const productsSelector = state => state.products;

// minPrice | maxPrice
export const priceSelector = (param = 'minPrice') => state => state[param];

export const discountSelector = state => state.discount;

export const categorySelector = state => state.query.category || '';

const initState = {
  minPrice: min,
  maxPrice: max,
  discount: 0,
  allCategories,
  products,
};

/* Reducer */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        ...filter,
      };
    }
    default: {
      return state;
    }
  }
};
