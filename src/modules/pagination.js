import { createSelector } from 'reselect';
import { splitEvery } from 'csssr-school-utils';
import {
  productsSelector,
  priceSelector,
  discountSelector,
  categorySelector,
} from './filter';
import { filterGoods } from '../utils/filterGoods';
import { NUMBER_OF_ITEMS_PER_PAGE } from '../constants';

/* Actions */
const SET_PAGE = 'pagination/SET_PAGE';

/* Action creators */
export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: { pageNumber },
});

/* Selectors */
export const productSliceSelector = createSelector(
  productsSelector,
  priceSelector('minPrice'),
  priceSelector('maxPrice'),
  discountSelector,
  categorySelector,
  (products, minPrice, maxPrice, discount, category) => {
    return splitEvery(
      NUMBER_OF_ITEMS_PER_PAGE,
      filterGoods(products, {
        categories: category,
        minPrice,
        maxPrice,
        discount,
      })
    );
  }
);

const initState = {
  page: 1,
};

/* Reducer */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_PAGE: {
      const { pageNumber } = action.payload;
      return {
        page: pageNumber,
      };
    }
    default: {
      return state;
    }
  }
};
