import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 36px;
  line-height: 48px;
  font-weight: 300;
  text-align: center;
  margin-top: 0;
  margin-bottom: 56px;
`;

export const ListProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  padding: 0 16px;
  margin: 0;
`;

export const ListItemProduct = styled.li`
  margin-bottom: 56px;
  margin-right: 32px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  :nth-child(3n) {
    margin-right: 0;
  }
`;
