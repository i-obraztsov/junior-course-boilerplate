import styled from 'styled-components';

export const ListProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  list-style: none;
  padding: 0 16px;
  margin: 0;
`

export const ListItemProduct = styled.li`
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  margin-bottom: 24px;
`
