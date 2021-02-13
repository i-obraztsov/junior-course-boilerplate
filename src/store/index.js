import { createStore, combineReducers } from 'redux';

import filter from '../modules/filter';

const reducer = combineReducers({
  filter,
})

export const store = createStore(reducer);
