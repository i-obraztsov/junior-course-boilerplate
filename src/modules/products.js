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
        category,
        minPrice,
        maxPrice,
        discount,
      })
    );
  }
);
