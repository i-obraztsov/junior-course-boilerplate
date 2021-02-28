import React from 'react';
import pt from 'prop-types';
import { EmptyContent } from '../EmptyContent';
import { ProductPreview } from '../ProductPreview';
import Pagination from '../Pagination';

import { ListProducts, ListItemProduct } from './style';

export default class ProductList extends React.Component {
  static defaultProps = {
    products: [],
  }

  render() {
    const { products, currentPage } = this.props;

    if (!products.length || currentPage > products.length) {
      return <EmptyContent />
    }

    return (
      <>
        <ListProducts>
          {products[currentPage - 1].map(
            ({ id, name, in_stock, price, sub_price, rating, img }) => (
              <ListItemProduct key={id}>
                <ProductPreview
                  id={id}
                  isInStock={in_stock}
                  img={img}
                  title={name}
                  price={price}
                  subPrice={sub_price}
                  maxRating={5}
                  rating={rating}
                />
              </ListItemProduct>
            )
          )}
        </ListProducts>
        <Pagination
          pages={products}
          currentPage={currentPage}
        />
      </>
    )
  }
}

ProductList.propTypes = {
  products: pt.arrayOf(pt.arrayOf(pt.shape({
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
  }).isRequired).isRequired).isRequired,
  currentPage: pt.number.isRequired,
};
