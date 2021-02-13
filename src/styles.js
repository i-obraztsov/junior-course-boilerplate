import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Open Sans', 'Helvetica Neue', 'Arial', sans-serif;
  font-size: 36px;
  line-height: 48px;
  font-weight: 300;
  text-align: center;
  margin-top: 0;
  margin-bottom: 56px;
`

export const BaseButton = styled.button`
  display: block;
  border: ${props => props.secondary ? '1px solid #323C48' : 0};
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  background-color: ${props => props.secondary ? '#FFF' : '#323C48'};
  color: ${props => props.secondary ? '#323C48' : '#FFF'};
  cursor: pointer;

  :hover {
    box-shadow: 0 0 3px 0 #323C48;
  }

  :focus {
    outline: 2px solid #4A90E2;
    outline-offset: 2px;
  }
`
