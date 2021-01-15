import styled from 'styled-components';

export const AppContent = styled.main`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  margin-top: 60px;
`;

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
  justify-content: space-between;
  list-style: none;
  padding: 0 16px;
  margin: 0;
`;

export const ListItemProduct = styled.li`
  margin-bottom: 56px;
`;

export const Rating = styled.span`
  color: ${props => props.isFilled ? '#323C48' : 'white'};
  stroke-width: 1px;
  margin-right: 10px;
`;

export const Price = styled.span`
  margin-right: 8px;
  line-height: 24px;
  font-weight: 400;
  font-size: ${props => props.isSub ? '12px' : '20px'};
  color: ${props => props.isInStock ? '#323C48' : '#7e8fa4'};
`
