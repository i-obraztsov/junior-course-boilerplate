import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

const rootEl = document.getElementById('root');

const render = () => {
  import('./components/App').then(({ App }) => {
    ReactDOM.render(<Provider store={store}>
      <App/>
    </Provider>, rootEl);
  });
}

render();

if (module.hot) {
  module.hot.accept('./components/App', render)
}
