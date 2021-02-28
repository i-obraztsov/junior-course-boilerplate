import React from 'react';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card/lib';
import { Rating } from '../Rating';
import { Price } from '../Price';

import { StyledLink } from './style';

export class ProductPreview extends React.Component {
  render() {
    const { isInStock, title, price, subPrice, rating, img, id } = this.props;
    return (
      <StyledLink to={`/${id}`} isInStock={isInStock}>
        <ProductItem
          isInStock={isInStock}
          img={img}
          title={title}
          price={<Price isInStock={isInStock} price={price} />}
          subPriceContent={
            <Price isInStock={isInStock} price={subPrice} isSub />
          }
          maxRating={5}
          rating={rating}
          ratingComponent={Rating}
        />
      </StyledLink>
    )
  }
}

ProductPreview.propTypes = {
  isInStock: pt.bool.isRequired,
  title: pt.string.isRequired,
  price: pt.number.isRequired,
  subPrice: pt.number,
  img: pt.string,
  rating: pt.number.isRequired,
  id: pt.number.isRequired,
};
