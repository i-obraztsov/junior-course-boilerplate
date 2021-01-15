import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Star } from './star.svg';
import { Rating as RatingContainer } from '../../styles';

export function Rating({ isFilled = false }) {
  return (
    <RatingContainer isFilled={isFilled}>
      <Star/>
    </RatingContainer>
  )
}

Rating.propTypes = {
  isFilled: pt.bool.isRequired,
};
