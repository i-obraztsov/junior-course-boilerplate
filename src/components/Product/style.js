import styled from 'styled-components';
import { Title } from '../Title/style';

export const StyledProduct = styled.div`
  display: flex;
`

export const WrapRating = styled.div`
  margin-bottom: 10px;
`

export const Img = styled.img`
  width: 224px;
  height: 200px;
`

export const SubTitle = styled(Title)`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`

export const Description = styled.div`
  margin-left: 32px;
`

export const WrapTitle = styled.div`
  display: flex;
  justify-content: ${props => props.center ? 'center' : 'flex-start'};
  align-items: center;
`
