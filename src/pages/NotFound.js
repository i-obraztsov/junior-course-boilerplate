import React from 'react';
import { LinkArrow } from '../components/LinkArrow';
import { NotFound as NotFoundPict } from '../components/NotFound';
import { Title } from '../components/Title';

import { history } from '../utils/history';

import { Container } from '../sharedStyle';
import { WrapTitle, Content, PageHeader } from './style';

export const NotFound = () => {
  const handleClick = (event) => {
    event.preventDefault();

    history.goBack();
  }

  return (
    <Container innerPage>
      <PageHeader>
        <WrapTitle center>
          <LinkArrow href="#" onClick={handleClick} />
          <Title level={1}>Товар не найден</Title>
        </WrapTitle>
      </PageHeader>
      <Content>
        <NotFoundPict />
      </Content>
    </Container>
  )
}
