import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 60px;
  display: grid;
  grid-template-areas:
    "header header header header"
    ". sidebar content .";
  grid-gap: 32px;
  grid-template-columns: 1fr 256px 768px 3fr;

  ${({ innerPage }) => {
    if (innerPage) {
      return {
        'grid-template-columns': '1fr 2fr 1fr',
        'grid-template-areas':
            `". . header ."
             ". content ."`,
      };
    }
  }}
`

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

export const BaseButton = styled.button`
  display: block;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  padding: 8px 16px;
  background-color: #323C48;
  color: #FFF;
  border: 0;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 3px 0 #323C48;
  }

  :focus {
    outline: 2px solid #4A90E2;
    outline-offset: 2px;
  }
`

export const SecondaryButton = styled(BaseButton)`
  background-color: #FFF;
  color: #323C48;
  border: 1px solid #323C48;
`
