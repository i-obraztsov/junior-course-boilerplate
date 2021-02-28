import React from 'react';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card/lib';
import { AVAILABLE_GOOD, MAX_RATING } from '../../constants';
import { Rating } from '../Rating';
import { Price } from '../Price';
import { StyledLink } from './style';

export class ProductPreview extends React.Component {
  render() {
    const { status, title, price, subPrice, rating, img, id } = this.props;
    const isAvailable = status === AVAILABLE_GOOD;

    return (
      <StyledLink
        to={`/${id}`}
        isInStock={isAvailable}
      >
        <ProductItem
          isInStock={isAvailable}
          img={`/assets/img/products${img}`}
          title={title}
          price={<Price isInStock={isAvailable} price={price} />}
          subPriceContent={
            <Price isInStock={isAvailable} price={subPrice} isSub />
          }
          maxRating={MAX_RATING}
          rating={rating}
          ratingComponent={Rating}
        />
      </StyledLink>
    )
  }
}

ProductPreview.propTypes = {
  status: pt.string.isRequired,
  title: pt.string.isRequired,
  price: pt.number.isRequired,
  subPrice: pt.number,
  img: pt.string,
  rating: pt.number.isRequired,
  id: pt.number.isRequired,
};
