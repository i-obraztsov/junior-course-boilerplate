import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { history } from '../utils/history';

import filter from '../modules/filter';

const reducer = combineReducers({
  router: connectRouter(history),
  filter,
});

export const store = createStore(
  reducer,
  composeWithDevTools(),
);
