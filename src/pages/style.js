import styled from 'styled-components';

import { MainContent, Header } from '../sharedStyle';

export const Content = styled(MainContent)`
  grid-column-start: 2;
  grid-column-end: 3;
`

export const PageHeader = styled(Header)`
  grid-column-start: 2;
  grid-column-end: 3;
`

export const WrapTitle = styled.div`
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: center;
`
