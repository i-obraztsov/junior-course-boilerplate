import React from 'react';
import pt from 'prop-types';
import { toFormat } from '../../utils/currencyFormatter';
import { Price as PriceContainer } from './style';
import { LogRender } from '../LogRender';

export class Price extends LogRender {
  render() {
    const { isSub, isInStock, price} = this.props;
    return(
      <PriceContainer isSub={isSub} isInStock={isInStock}>{toFormat(price)}</PriceContainer>
    )
  }
}

Price.propTypes = {
  price: pt.number,
  isSub: pt.bool,
  isInStock: pt.bool.isRequired,
};
