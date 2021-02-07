import React from 'react';
import pt from 'prop-types';
import { EmptyContent } from '../EmptyContent';
import ProductCard from '../ProductCard';
import { filterGoods } from '../../utils/filterGoods';

import { ListProducts, ListItemProduct } from './../../styles';

export default class Products extends React.Component {
  static defaultProps = {
    allCategories: [],
    activeCategories: [],
    minPrice: 0,
    maxPrice: 10,
    discount: 0,
    products: [],
  }

  render() {
    const {
      allCategories,
      activeCategories,
      minPrice,
      maxPrice,
      discount,
      products,
    } = this.props;

    const filtered = filterGoods(products, {
      categories: activeCategories.length ? activeCategories : allCategories,
      minPrice,
      maxPrice,
      discount,
    });

    return (
      <ListProducts>
        {filtered.length ? (
          filtered.map(({ id, name, in_stock, price, sub_price, rating, img }) => (
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
  allCategories: pt.arrayOf(pt.string).isRequired,
  activeCategories: pt.arrayOf(pt.string).isRequired,
  minPrice: pt.number.isRequired,
  maxPrice: pt.number.isRequired,
  discount: pt.number.isRequired,
};
