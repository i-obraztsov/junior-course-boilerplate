import styled from 'styled-components';

export const Rating = styled.span`
  color: ${props => props.isFilled ? '#323C48' : '#FFF'};
  stroke-width: 1px;
  margin-right: 10px;
`
