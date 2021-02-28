import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Arrow } from './arrow.svg';
import { StyledLink } from './style';

export const LinkArrow = (props) =>  {
  return (
    <StyledLink { ...props }>
      <Arrow/>
    </StyledLink>
  )
}

LinkArrow.propTypes = {
  to: pt.string.isRequired
};
