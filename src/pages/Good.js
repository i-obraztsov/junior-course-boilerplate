import React from 'react';
import { Redirect } from 'react-router-dom';

import products from '../products.json';

import { LinkArrow } from '../components/LinkArrow';
import { Title } from '../components/Title';
import { Product } from '../components/Product';

import { Container } from '../sharedStyle';
import { WrapTitle, Content, PageHeader } from './style';

export const Good = (props) => {
  const productId = +props.match.params.id;

  const product = products.find(({ id }) => id === productId);

  if (!product) {
    return <Redirect to="/notFound" />
  }

  return (
    <Container innerPage>
      <PageHeader>
        <WrapTitle>
          <LinkArrow to="/" />
          <Title level={1}>{product.name}</Title>
        </WrapTitle>
      </PageHeader>
      <Content>
        <Product
            name={product.name}
            img={product.img}
            rating={product.rating}
            price={product.price}
            subPrice={product.sub_price}
        />
      </Content>
    </Container>
  );
};
