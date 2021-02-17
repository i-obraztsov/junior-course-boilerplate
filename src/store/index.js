import { createStore, combineReducers } from 'redux';

import filter from '../modules/filter';
import pagination from '../modules/pagination';

const reducer = combineReducers({
  filter,
  pagination,
})

export const store = createStore(reducer);
