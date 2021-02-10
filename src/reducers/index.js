import { RESET_FILTER, APPLY_FILTER } from '../actions';

import { initState } from '../store';

const products = (state = initState, action) => {
  switch (action.type) {
    case APPLY_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        ...filter,
      };
    }
    case RESET_FILTER: {
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

export default products;
