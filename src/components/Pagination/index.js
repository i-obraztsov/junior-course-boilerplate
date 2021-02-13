import React from 'react';

import { Container, Button } from './style';

export class Pagination extends React.Component {
  render() {
    return (
      <Container>
        <Button as="a" secondary isPrev>Назад</Button>
        <Button isActive as="a" secondary>1</Button>
        <Button as="a" secondary>2</Button>
        <Button as="a" secondary>...</Button>
        <Button as="a" secondary isNext>Вперёд</Button>
      </Container>
    )
  }
}
