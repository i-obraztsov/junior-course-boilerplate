import React from 'react';
import products from '../../products.json';
import { findMinAndMax } from '../../utils/findMinAndMax';

import { AppContent, AppContainer, Aside } from './style'
import { Products } from '../Products';
import { Filter } from '../Filter';
import { Title } from '../Title';

export class App extends React.Component {
  constructor(props) {
    super(props);

    const { min, max } = findMinAndMax(products);

    this.state = {
      minPrice: min,
      maxPrice: max,
      products: [],
    }
  }

  componentDidMount() {
    const { minPrice, maxPrice } = this.state;
    const filtered = this.filteredData(products, minPrice, maxPrice);

    this.setState({
      products: filtered,
    })
  }

  filteredData(data = products, min, max) {
    return data.filter(({ price }) => price >= min && price <= max)
  }

  handleChangeRangePrice = (min, max) => {
    const newProducts = this.filteredData(products, min, max);

    this.setState({
      minPrice: min,
      maxPrice: max,
      products: newProducts,
    });
  }

  render() {
    const { minPrice, maxPrice, products } = this.state;
    return (
      <AppContainer>
        <Title tag="h1">Список товаров</Title>
        <AppContent>
          <Aside>
            <Filter
              onApply={this.handleChangeRangePrice}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </Aside>
          <Products products={products} />
        </AppContent>
      </AppContainer>
    );
  }
}
