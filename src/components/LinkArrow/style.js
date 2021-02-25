import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  box-sizing: content-box;
  line-height: 1;
  width: 18px;
  height: 12px;
  padding: 10px;
  color: #323C48;

  :hover {
    color: blue;
  }
`
