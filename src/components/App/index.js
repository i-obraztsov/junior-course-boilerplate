import React from 'react';

import { MainContent, Container, Sidebar, Header } from './style';
import { Title } from '../Title';
import Products from '../../containers/Products';
import Filter from '../../containers/Filter';

export const App = () => {
  return (
    <Container>
      <Header>
        <Title tag="h1">Список товаров</Title>
      </Header>
      <Sidebar>
        <Filter/>
      </Sidebar>
      <MainContent>
        <Products/>
      </MainContent>
    </Container>
  );
}
