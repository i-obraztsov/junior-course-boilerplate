import React from 'react';

import { Title } from '../components/Title';
import Products from '../containers/Products';
import Filter from '../containers/Filter';

import { MainContent, Container, Sidebar, Header } from '../sharedStyle';

export const Catalog = () => {
  return (
    <Container>
      <Header>
        <Title level={1}>Список товаров</Title>
      </Header>
      <Sidebar>
        <Filter/>
      </Sidebar>
      <MainContent>
        <Products/>
      </MainContent>
    </Container>
  );
};
