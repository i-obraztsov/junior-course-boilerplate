import React from 'react';

import { AppContent, AppContainer, Aside } from './style';
import { Title } from '../Title';
import Products from '../../containers/Products';
import Filter from '../../containers/Filter';

export const App = () => {
  return (
    <AppContainer>
      <Title tag="h1">Список товаров</Title>
      <AppContent>
        <Aside>
          <Filter/>
        </Aside>
        <Products/>
      </AppContent>
    </AppContainer>
  );
}
