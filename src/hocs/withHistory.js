import React from 'react';
import { stringifyQuery, parseQuery } from '../utils/url';

export const withHistory = (Component) => class extends React.Component {
  componentDidMount() {
    this.setFromHistory();

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = () => {
    const { category, page } = parseQuery(window.location.search, { parseNumber: true });
    const { setFilter, setPage } = this.props;

    if (category && typeof setFilter === 'function') {
      setFilter({ activeCategories: category });
    }

    if (page) {
      setPage(page);
    } else {
      setPage(1);
    }
  }

  pushHistory = (name, params) => {
    const query = parseQuery(window.location.search);
    const url = `${window.location.pathname}?${stringifyQuery({
      ...query,
      ...params,
    })}`;

    window.history.pushState(null, name, url);
  }

  render() {
    return <Component {...this.props} pushHistory={this.pushHistory} />
  }
}
