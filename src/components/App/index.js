import React from 'react';
import products from '../../products.json';
import { findMinAndMax } from '../../utils/findMinAndMax';
import { filterGoods } from '../../utils/filterGoods';
import { uniqBy } from '../../utils/uniqBy';

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
      categories: [],
    }
  }

  componentDidMount() {
    const { minPrice, maxPrice, discount } = this.state;
    const categories = uniqBy(products, 'category');

    const filtered = filterGoods(products, {
      minPrice,
      maxPrice,
      discount,
    });

    this.setState({
      products: filtered,
      categories,
    })
  }

  handleChangeRangePrice = (filter) => {
    const newProducts = filterGoods(products, filter);

    this.setState({
      minPrice: filter.minPrice,
      maxPrice: filter.maxPrice,
      discount: filter.discount,
      activeCategories: filter.categories,
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
      categories
    } = this.state;

    return (
      <AppContainer>
        <Title tag="h1">Список товаров</Title>
        <AppContent>
          <Aside>
            <Filter
              onApply={this.handleChangeRangePrice}
              minPrice={minPrice}
              maxPrice={maxPrice}
              discount={discount}
              activeCategories={activeCategories}
              categories={categories}
            />
          </Aside>
          <Products products={products} />
        </AppContent>
      </AppContainer>
    );
  }
}
