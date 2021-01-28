import React from 'react';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card/lib';
import { withLogRender } from '../../hocs/withLogRender';
import { Rating } from '../Rating';
import { Price } from '../Price';

class ProductCard extends React.Component {
  render() {
    const { isInStock, title, price, supPrice, rating, img } = this.props;
    return (
      <ProductItem
        isInStock={isInStock}
        img={img}
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
  img: pt.string,
  rating: pt.number.isRequired,
};
