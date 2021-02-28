import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BaseButton } from '../../sharedStyle';

export const StyledLink = styled(
  ({ isDisable, isPrev, isNext, isActive, ...rest }) => <BaseButton as={Link} {...rest} />
)`
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.isActive ? '#5695ED' : '#C5CFDE')};
  color: ${(props) => (props.isActive ? '#FFF' : '#7E8FA4')};
  background-color: ${(props) => (props.isActive ? '#5695ED' : '#FFF')};
  margin-right: ${(props) => (props.isPrev ? '14px' : 0)};
  margin-left: ${(props) => (props.isNext ? '14px' : 0)};
  width: ${(props) => (props.isPrev || props.isNext ? '88px' : 'auto')};

  ${({ isDisable }) => {
    if (isDisable) {
      return {
        cursor: 'not-allowed',
        'pointer-events': 'none',
        opacity: 0.5,
        '&:hover': {
          'box-shadow': 'none',
        },
      };
    }
  }}
`

export const Container = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  padding: 10px;
`
