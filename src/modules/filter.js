import products from '../products.json';
import { findMinAndMax } from '../utils/findMinAndMax';
import { uniqBy } from '../utils/uniqBy';

const { min, max } = findMinAndMax(products);
const allCategories = uniqBy(products, 'category');

/* Actions */
const APPLY = 'filter/APPLY';
const RESET = 'filter/RESET';

/* Action creators */
export const setFilter = (filter) => ({
  type: APPLY,
  payload: { filter },
});

export const resetFilter = () => ({
  type: RESET,
});

const initState = {
  minPrice: min,
  maxPrice: max,
  discount: 0,
  allCategories,
  activeCategories: [],
  products,
}

/* Reducer */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case APPLY: {
      const { filter } = action.payload;
      return {
        ...state,
        ...filter,
      };
    }
    case RESET: {
      return {
        ...initState,
        activeCategories: [],
      };
    }
    default: {
      return state;
    }
  }
}
