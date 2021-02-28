import React from 'react';
import Product from '../containers/Product';

import { Container } from '../sharedStyle';

export const ProductPage = (props) => {
  const productId = +props.match.params.id;

  return (
    <Container innerPage>
      <Product productId={productId}/>
    </Container>
  );
};
