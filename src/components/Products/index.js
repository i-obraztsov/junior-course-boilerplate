import React from 'react';
import pt from 'prop-types';
import { withLogRender } from '../../hocs/withLogRender';
import { EmptyContent } from '../EmptyContent';
import ProductCard from '../ProductCard';

import { ListProducts, ListItemProduct } from './../../styles';

class Products extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <ListProducts>
        {products.length ? (
          products.map(({ id, name, in_stock, price, sub_price, rating }) => (
            <ListItemProduct key={id}>
              <ProductCard
                isInStock={in_stock}
                img="https://images.unsplash.com/photo-1610392154742-03aed0fad04e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                title={name}
                price={price}
                subPrice={sub_price}
                maxRating={5}
                rating={rating}
              />
            </ListItemProduct>
          ))
        ) : (
          <ListItemProduct fullWidth>
            <EmptyContent />
          </ListItemProduct>
        )}
      </ListProducts>
    )
  }
}

export default withLogRender(Products);

Products.propTypes = {
  products: pt.array.isRequired,
};
