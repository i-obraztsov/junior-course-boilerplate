import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SecondaryButton } from '../../sharedStyle';

export const ResetLink = styled(
  ({ fullWidth, secondary, ...rest }) => <SecondaryButton as={Link} {...rest} />
)``

export const CategoryLink = styled(
  ({ fullWidth, secondary, isActive, ...rest }) => <SecondaryButton as={Link} {...rest} />
)`
  border-radius: 15px;
  margin-bottom: 24px;
  margin-left: 16px;
  border-color: #7E8FA4;
  color: #7E8FA4;
  text-transform: capitalize;

  &:first-child {
    margin-left: 0;
  }

  ${({ isActive }) => {
    if (isActive) {
      return {
        'color': '#FFF',
        'background-color': '#323C48',
      };
    }
  }}
`
