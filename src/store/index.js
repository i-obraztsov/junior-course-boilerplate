import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { history } from '../utils/history';

import filter from '../modules/filter';
import productsList from '../modules/products';

const reducer = combineReducers({
  router: connectRouter(history),
  filter,
  productsList,
});

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), composeWithDevTools()),
);
