import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './store';

import './index.css';

const rootEl = document.getElementById('root');

const render = () => {
  import('./App').then(({ App }) => {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>,
      rootEl,
    );
  });
}

render();

if (module.hot) {
  module.hot.accept('./App', render)
}
