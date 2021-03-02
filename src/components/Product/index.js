import React from 'react';
import pt from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Rating } from '../Rating';
import { Price } from '../Price';
import { LinkArrow } from '../LinkArrow';
import { Title } from '../Title';
import { MAX_RATING } from '../../constants';

import { WrapTitle, Content, PageHeader } from '../../sharedStyle';

import {
  StyledProduct,
  Img,
  Description,
  SubTitle,
  WrapRating,
} from './style';

const range = to => [...Array(to).keys()].map(i => i + 1)

export class Product extends React.Component {
  static defaultProps = {
    loading: false,
    error: null,
    getProducts: () => {},
    product: undefined,
  }

  componentDidMount() {
    const { getProducts, product } = this.props;

    if (!product) {
      getProducts();
    }
  }

  render() {
    const { loading, error, product } = this.props;

    if (loading && !product) {
      return 'loading';
    }

    if (!product) {
      return <Redirect to="/notFound" />
    }

    if (error) {
      return 'error';
    }

    const { name, img, stars, price, discount } = product;

    return (
      <>
        <PageHeader>
          <WrapTitle>
            <LinkArrow to="/" />
            <Title level={1}>{name}</Title>
          </WrapTitle>
        </PageHeader>
        <Content>
          <StyledProduct>
            <Img src={`/assets/img/products${img}`} alt={` Фото ${name}`} />

            <Description>
              <SubTitle as="h2">{name}</SubTitle>
              <WrapRating>
                {range(MAX_RATING).map((i) =>
                  React.createElement(Rating, {
                    key: i,
                    isFilled: i <= stars,
                  })
                )}
              </WrapRating>
              <Price isInStock price={price} />
              <Price isInStock price={discount && price + price / discount} isSub />
            </Description>
          </StyledProduct>
        </Content>
      </>
    );
  }
}

Product.propTypes = {
  loading: pt.bool.isRequired,
  error: pt.oneOfType([pt.oneOf([null]), pt.string]),
  getProducts: pt.func.isRequired,
  product: pt.shape({
    name: pt.string.isRequired,
    stars: pt.number.isRequired,
    price: pt.number.isRequired,
    discount: pt.number.isRequired,
    img: pt.string.isRequired,
  })
};
