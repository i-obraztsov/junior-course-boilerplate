import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 60px;
  display: grid;
  grid-template-areas:
    "header header header header"
    ". sidebar content .";
  grid-gap: 32px;
  grid-template-columns: 1fr 256px 768px 3fr;
`;

export const Header = styled.header`
  margin-top: 60px;
  margin-bottom: 44px;
  grid-area: header;
`

export const MainContent = styled.main`
  grid-area: content;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
`
