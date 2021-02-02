import styled from 'styled-components';

export const Price = styled.span`
  margin-right: 8px;
  line-height: 24px;
  font-weight: 600;
  font-size: ${props => props.isSub ? '12px' : '20px'};
  color: ${props => props.isInStock ? '#323C48' : '#7E8FA4'};
`
