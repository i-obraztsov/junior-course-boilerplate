import React from 'react';
import pt from 'prop-types';

import { Title as TitleStyled } from './style';

export function Title({ children, tag = 'h1' }) {
  return (
    <TitleStyled as={tag}>{children}</TitleStyled>
  )
}

Title.propTypes = {
  children: pt.node.isRequired,
  tag: pt.string,
};
