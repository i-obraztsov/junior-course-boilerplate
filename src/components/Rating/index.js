import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Star } from './star.svg';
import { Rating as RatingContainer } from './style';

export class Rating extends React.Component {
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
