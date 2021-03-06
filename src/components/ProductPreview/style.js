import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(
  ({ isInStock, ...rest }) => <Link {...rest} />
)`
  text-decoration: none;
  display: block;
  transition: box-shadow 0.2s;

  :hover {
    box-shadow: 0 0 12px 1px #323C48;
  }

  ${({ isInStock }) => {
    if (!isInStock) {
      return {
        'pointer-events': 'none',
        '&:hover': {
          'box-shadow': 'none',
        },
      };
    }
  }}
`
