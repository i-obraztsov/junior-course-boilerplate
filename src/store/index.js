import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import filter from '../modules/filter';
import pagination from '../modules/pagination';

const reducer = combineReducers({
  filter,
  pagination,
})

export const store = createStore(
  reducer,
  composeWithDevTools(),
);
