import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Star } from './star.svg';
import { Rating as RatingContainer } from './style';
import { LogRender } from '../LogRender';

export class Rating extends LogRender {
  render() {
    const { isFilled } = this.props;
    return (
      <RatingContainer isFilled={isFilled}>
        <Star/>
      </RatingContainer>
    )
  }
}

Rating.propTypes = {
  isFilled: pt.bool.isRequired,
};
