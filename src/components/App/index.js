import React from 'react';
import products from '../../products.json';
import { findMinAndMax } from '../../utils/findMinAndMax';
import { filterGoods } from '../../utils/filterGoods';
import { parseQuery } from '../../utils/url';
import { uniqBy } from '../../utils/uniqBy';

import { AppContextProvider } from '../../AppContext';

import { AppContent, AppContainer, Aside } from './style';
import { Title } from '../Title';
import Products from '../Products';
import Filter from '../Filter';

export class App extends React.Component {
  constructor(props) {
    super(props);

    const { min, max } = findMinAndMax(products);

    this.state = {
      minPrice: min,
      maxPrice: max,
      discount: 0,
      activeCategories: [],
      products: [],
      allCategories: [],
    }
  }

  componentDidMount() {
    const { minPrice, maxPrice, discount, activeCategories } = this.state;
    const allCategories = uniqBy(products, 'category');

    const { category } = parseQuery(window.location.search.substr(1));

    const categories = category
      ? category
      : activeCategories;

    const filtered = filterGoods(products, {
      categories,
      minPrice,
      maxPrice,
      discount,
    });

    this.setState({
      products: filtered,
      allCategories,
      activeCategories: categories,
    });

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  setFromHistory = (event) => {
    const { category = [] } = parseQuery(window.location.search.substr(1));
    this.setState({
      activeCategories: category,
    })

    this.handleApplyFilter({ activeCategories: category });
  }

  handleApplyFilter = (filter) => {
    const { minPrice, maxPrice, discount, activeCategories } = this.state;

    const newFilter = {
      minPrice: filter.minPrice !== undefined ? filter.minPrice : minPrice,
      maxPrice: filter.maxPrice !== undefined ? filter.maxPrice : maxPrice,
      discount: filter.discount !== undefined ? filter.discount : discount,
      categories:
        filter.activeCategories !== undefined
          ? filter.activeCategories
          : activeCategories,
    };

    const newProducts = filterGoods(products, newFilter);

    this.setState({
      ...filter,
      products: newProducts,
    });
  }

  resetFilter = (event) => {
    event.preventDefault();

    const { min, max } = findMinAndMax(products);

    const filtered = filterGoods(products, {
      categories: [],
      minPrice: min,
      maxPrice: max,
      discount: 0,
    });

    this.setState({
      minPrice: min,
      maxPrice: max,
      discount: 0,
      activeCategories: [],
      products: filtered,
    });

    window.history.pushState(null, 'page', window.location.pathname);
  }

  render() {
    const {
      products,
      activeCategories,
      allCategories
    } = this.state;

    return (
      <AppContainer>
        <Title tag="h1">Список товаров</Title>
        <AppContent>
          <Aside>
            <AppContextProvider value={this.state}>
              <Filter
                applyFilter={this.handleApplyFilter}
                categories={allCategories}
                activeCategories={activeCategories}
                resetFilter={this.resetFilter}
              />
            </AppContextProvider>
          </Aside>
          <Products products={products} />
        </AppContent>
      </AppContainer>
    );
  }
}
