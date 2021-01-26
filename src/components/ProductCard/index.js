import React from 'react';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card/lib';
import { withLogRender } from '../../hocs/withLogRender';
import { Rating } from '../Rating';
import { Price } from '../Price';

class ProductCard extends React.Component {
  render() {
    const { isInStock, title, price, supPrice, rating } = this.props;
    return (
      <ProductItem
        isInStock={isInStock}
        img="https://images.unsplash.com/photo-1610392154742-03aed0fad04e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        title={title}
        price={<Price isInStock={isInStock} price={price} />}
        subPriceContent={
          <Price isInStock={isInStock} price={supPrice} isSub />
        }
        maxRating={5}
        rating={rating}
        ratingComponent={Rating}
      />
    )
  }
}

export default withLogRender(ProductCard)

ProductCard.propTypes = {
  isInStock: pt.bool.isRequired,
  title: pt.string.isRequired,
  price: pt.number.isRequired,
  subPrice: pt.number,
  rating: pt.number.isRequired,
};
