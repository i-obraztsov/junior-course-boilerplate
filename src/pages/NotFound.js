import React from 'react';
import { LinkArrow } from '../components/LinkArrow';
import { NotFound as NotFoundPict } from '../components/NotFound';
import { Title } from '../components/Title';

import { Container, WrapTitle, Content, PageHeader} from '../sharedStyle';

export const NotFound = ({ location }) => {
  const { state } = location;
  const title = (state && state.title) || 'Товар не найден';
  const showLink = !state || state.showLink;

  return (
    <Container innerPage>
      <PageHeader>
        <WrapTitle center>
          { showLink && <LinkArrow to="/" /> }
          <Title level={1}>{title}</Title>
        </WrapTitle>
      </PageHeader>
      <Content>
        <NotFoundPict />
      </Content>
    </Container>
  )
}
