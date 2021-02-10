import React from 'react';
import pt from 'prop-types';
import { EmptyContent } from '../EmptyContent';
import ProductCard from '../ProductCard';

import { ListProducts, ListItemProduct } from './../../styles';

export default class Products extends React.Component {
  static defaultProps = {
    products: [],
  }

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

Products.propTypes = {
  products: pt.arrayOf(pt.shape({
    id: pt.number.isRequired,
    name: pt.string.isRequired,
    rating: pt.number.isRequired,
    price: pt.number.isRequired,
    sub_price: pt.oneOfType([
      pt.number,
      pt.oneOf([null])
    ]),
    img: pt.string.isRequired,
    category: pt.string.isRequired,
    in_stock: pt.bool.isRequired,
  }).isRequired).isRequired,
};
