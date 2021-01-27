import React from 'react';
import pt from 'prop-types';
import { toFormat } from '../../utils/currencyFormatter';
import { Price as PriceContainer } from './style';

export class Price extends React.Component{
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
