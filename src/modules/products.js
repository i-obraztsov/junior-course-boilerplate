import { createSelector } from 'reselect';
import { batch } from 'react-redux'
import { splitEvery } from 'csssr-school-utils';
import { priceSelector, discountSelector, categorySelector, setFilter } from './filter';
import { filterGoods } from '../utils/filterGoods';
import { NUMBER_OF_ITEMS_PER_PAGE } from '../constants';
import { uniqBy } from '../utils/uniqBy';
import minBy from '../utils/minBy';
import maxBy from '../utils/maxBy';

/* Actions */
const FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILED = 'products/FETCH_PRODUCTS_FAILED';

/* Action creators */
export const setProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const setProductsFailed = msg => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: msg,
});

/* Selectors */
export const productsSelector = state => state.products;

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

export const allCategoriesSelector = createSelector(
  productsSelector,
  (products) => uniqBy(products, 'category')
);

export const productIdSelector = (_, props) => props.productId;

export const productSelector = createSelector(
  [productsSelector, productIdSelector],
  (products, productId) => products.find(({ id }) => id === productId)
);

/* API */
export const fetchProducts = async () => {
  const api = 'https://course-api.school.csssr.com/products';

  const response = await fetch(api);
  const products = await response.json();

  return products;
};

export const getProducts = async dispatch => {
  try {
    const { products } = await fetchProducts();
    const initFilter = {
      minPrice: minBy(item => item.price, products).price,
      maxPrice: maxBy(item => item.price, products).price,
    };

    batch(() => {
      dispatch(setProductsSuccess(products));
      dispatch(setFilter(initFilter));
    })
  } catch (err) {
    dispatch(setProductsFailed(err.toString()));
  }
}

const initState = {
  products: [],
  loading: true,
  error: null,
};

/* Reducer */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      const { products } = action.payload;
      return {
        ...state,
        error: null,
        loading: false,
        products,
      };
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
