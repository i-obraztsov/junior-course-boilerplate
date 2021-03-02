import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(
  ({ isInStock, ...rest }) => <Link {...rest} />
)`
  text-decoration: none;
  display: block;
  transition: box-shadow 0.2s;

  & > div {
    padding: 6px;
    padding-top: 0;
  }

  & img {
    margin-left: -6px;
  }

  :hover {
    box-shadow: 0 0 5px 1px #5695ED;
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
