import React from 'react';
import pt from 'prop-types';
import { Rating } from '../Rating';
import { Price } from '../Price';

import {
  StyledProduct,
  Img,
  Description,
  SubTitle,
  WrapRating,
} from './style';

const range = to => [...Array(to).keys()].map(i => i + 1)

export const Product = ({
  name = '',
  img = '',
  rating = 5,
  price = 0,
  subPrice = 0,
}) => {
  return (
    <StyledProduct>
      <Img src={img} alt={` Фото ${name}`} />

      <Description>
        <SubTitle as="h2">{name}</SubTitle>
        <WrapRating>
          {range(5).map((i) =>
            React.createElement(Rating, {
              key: i,
              isFilled: i <= rating,
            })
          )}
        </WrapRating>
        <Price isInStock price={price} />
        <Price isInStock price={subPrice} isSub />
      </Description>
    </StyledProduct>
  );
}

Product.propTypes = {
  name: pt.string.isRequired,
  img: pt.string.isRequired,
  rating: pt.number.isRequired,
  price: pt.number.isRequired,
  subPrice: pt.number,
};
