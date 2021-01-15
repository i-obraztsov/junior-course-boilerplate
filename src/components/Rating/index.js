import React from 'react';
import { ReactComponent as Star } from './star.svg';
import { Rating as RatingContainer } from '../../styles';

export function Rating({ isFilled = false }) {
  return (
    <RatingContainer isFilled={isFilled}>
      <Star/>
    </RatingContainer>
  )
}
