import React from 'react';
import products from '../../products.json';
import { findMinAndMax } from '../../utils/findMinAndMax';
import { calcDiscount } from '../../utils/calcDiscount';

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
      discount: 0,
      products: [],
    }
  }

  componentDidMount() {
    const { minPrice, maxPrice, discount } = this.state;
    const filtered = this.filteredData(products, minPrice, maxPrice, discount);

    this.setState({
      products: filtered,
    })
  }

  filteredData(data = products, min, max, discount) {
    return data.filter(({ price, sub_price: subPrice }) => {
      const currentDiscount = calcDiscount(subPrice, price);

      return price >= min && price <= max && discount <= currentDiscount;
    });
  }

  handleChangeRangePrice = ({ min, max, discount }) => {
    const newProducts = this.filteredData(products, min, max, discount);

    this.setState({
      minPrice: min,
      maxPrice: max,
      products: newProducts,
    });
  }

  render() {
    const { minPrice, maxPrice, discount, products } = this.state;

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
            />
          </Aside>
          <Products products={products} />
        </AppContent>
      </AppContainer>
    );
  }
}
