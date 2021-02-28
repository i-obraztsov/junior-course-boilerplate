import React from 'react';
import pt from 'prop-types';

import { Title as TitleStyled } from './style';

export function Title({ children, level = 1 }) {
  return (
    <TitleStyled as={`h${level}`}>{children}</TitleStyled>
  )
}

Title.propTypes = {
  children: pt.node.isRequired,
  level: pt.number,
};
