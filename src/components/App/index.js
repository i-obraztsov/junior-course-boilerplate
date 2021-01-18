import React from 'react';
import products from '../../products.json';

import { AppContent, AppContainer } from './style'
import { Products } from '../Products';
import { Title } from '../Title';

export function App() {
  return (
    <AppContent>
      <AppContainer>
        <Title tag="h1">Список товаров</Title>
        <Products products={products} />
      </AppContainer>
    </AppContent>
  );
}
