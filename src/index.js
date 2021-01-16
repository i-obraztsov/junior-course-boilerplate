import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const rootEl = document.getElementById('root');

const render = () => {
  import('./components/App').then(({ App }) => {
    ReactDOM.render(<App/>, rootEl);
  });
}

render();

if (module.hot) {
  module.hot.accept('./components/App', render)
}
