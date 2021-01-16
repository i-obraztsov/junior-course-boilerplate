import React from 'react';
import ProductItem from 'csssr-school-product-card/lib';
import products from '../../products.json';

import {
  AppContent,
  AppContainer,
} from './style'

import {
  MainTitle,
  ListProducts,
  ListItemProduct,
} from './../../styles'

import { Rating } from '../Rating';
import { Price } from '../Price';
import { EmptyContent } from '../EmptyContent';

export function App() {
  return (
    <AppContent>
      <AppContainer>
        <MainTitle>Список товаров</MainTitle>

        <ListProducts>
          {products.length ? (
            products.map(({ id, name, in_stock, price, sub_price, rating }) => (
              <ListItemProduct key={id}>
                <ProductItem
                  isInStock={in_stock}
                  img={
                    'https://images.unsplash.com/photo-1610392154742-03aed0fad04e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
                  }
                  title={name}
                  price={<Price isInStock={in_stock} price={price} />}
                  subPriceContent={
                    <Price isInStock={in_stock} price={sub_price} isSub />
                  }
                  maxRating={5}
                  rating={rating}
                  ratingComponent={Rating}
                />
              </ListItemProduct>
            ))
          ) : (
            <ListItemProduct fullWidth>
              <EmptyContent />
            </ListItemProduct>
          )}
        </ListProducts>
      </AppContainer>
    </AppContent>
  );
}
