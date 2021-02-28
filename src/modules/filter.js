/* Actions */
const SET_FILTER = 'filter/SET_FILTER';

/* Action creators */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

/* Selectors */
// minPrice | maxPrice
export const priceSelector = (param = 'minPrice') => state => state[param];

export const discountSelector = state => state.discount;

export const categorySelector = state => state.query.category || '';

const initState = {
  minPrice: 0,
  maxPrice: 0,
  discount: 0,
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
