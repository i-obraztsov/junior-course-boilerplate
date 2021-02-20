import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Arrow } from './arrow.svg';
import { StyledLink } from './style';

export const LinkArrow = ({ href, onClick }) =>  {
  return (
    <StyledLink href={href} onClick={onClick}>
      <Arrow/>
    </StyledLink>
  )
}

LinkArrow.propTypes = {
  href: pt.string.isRequired,
  onClick: pt.func.isRequired
};
