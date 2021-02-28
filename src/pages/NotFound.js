import React from 'react';
import { LinkArrow } from '../components/LinkArrow';
import { NotFound as NotFoundPict } from '../components/NotFound';
import { Title } from '../components/Title';

import { Container } from '../sharedStyle';
import { WrapTitle, Content, PageHeader } from './style';

export const NotFound = () => {
  return (
    <Container innerPage>
      <PageHeader>
        <WrapTitle center>
          <LinkArrow to="/" />
          <Title level={1}>Товар не найден</Title>
        </WrapTitle>
      </PageHeader>
      <Content>
        <NotFoundPict />
      </Content>
    </Container>
  )
}
