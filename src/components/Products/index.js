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
          products.map(({ id, name, in_stock, price, sub_price, rating, img }) => (
            <ListItemProduct key={id}>
              <ProductCard
                isInStock={in_stock}
                img={img}
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
