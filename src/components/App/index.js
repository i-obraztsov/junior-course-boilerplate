import React from 'react';
import products from '../../products.json';
import { findMinAndMax } from '../../utils/findMinAndMax';
import { filterGoods } from '../../utils/filterGoods';
import { uniqBy } from '../../utils/uniqBy';

import { AppContextProvider } from '../../AppContext';
import { inputNumberMask } from '../../utils/inputNumberMask';

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
    const categories = uniqBy(products, 'category');

    const filtered = filterGoods(products, {
      categories: activeCategories,
      minPrice,
      maxPrice,
      discount,
    });

    this.setState({
      products: filtered,
      allCategories: categories,
    })
  }

  handleChange = (event) => {
    let newState = {};
    if (event.target.type === 'checkbox') {
      const { activeCategories } = this.state;
      let categories = [];

      if (event.target.checked) {
        categories = activeCategories.concat(event.target.name);
      } else {
        categories = activeCategories.filter(
          (category) => category !== event.target.name
        );
      }

      newState = { activeCategories: categories };
    } else {
      const maskedValue = inputNumberMask(event.target.value);

      newState = {
        [event.target.name]: maskedValue,
      };
    }

    this.handleApplyFilter(newState);
    this.setState(newState);
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
      products: newProducts,
    });
  }

  render() {
    const {
      minPrice,
      maxPrice,
      discount,
      products,
      activeCategories,
      allCategories
    } = this.state;

    return (
      <AppContainer>
        <Title tag="h1">Список товаров</Title>
        <AppContent>
          <Aside>
            <AppContextProvider value={{
              minPrice,
              maxPrice,
              discount,
              activeCategories,
              handleChange: this.handleChange,
            }}>
              <Filter categories={allCategories} />
            </AppContextProvider>
          </Aside>
          <Products products={products} />
        </AppContent>
      </AppContainer>
    );
  }
}
