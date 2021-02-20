import React from 'react';

import planet from '../../assets/img/planet404.svg';
import { Container } from './style';

export const NotFound = () => (
  <Container>
    <img src={planet} alt="Page not found" />
  </Container>
);
