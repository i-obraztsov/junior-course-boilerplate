import styled from 'styled-components';

import { BaseButton } from '../../styles';

export const Button = styled(BaseButton)`
  padding: 8px 12px;
  border: 1px solid ${props => props.isActive ? '#5695ED' : '#C5CFDE'};
  color: ${props => props.isActive ? '#FFF' : '#7E8FA4'};
  background-color: ${props => props.isActive ? '#5695ED' : '#FFF'};
  margin-right: ${props => props.isPrev ? '14px' : 0};
  margin-left: ${props => props.isNext ? '14px' : 0};
  width: ${props => props.isPrev || props.isNext ? '88px' : 'auto'};
`

export const Container = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  padding: 10px;
`
