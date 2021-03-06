import styled from 'styled-components';

export const StyledForm = styled.form`
  font-family: "Open Sans", sans-serif;
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 4px 16px;
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #323C48;
  border: 1px solid #7E8FA4;

  :focus {
    outline: 2px solid #4A90E2;
    outline-offset: 2px;
  }
`

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  margin-top: ${props => props.marginTop ? '24px' : 0}
`

export const Legend = styled.legend`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #323C48;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  margin-right: 16px;
  margin-bottom: 24px;

  :last-child {
    margin-right: 0;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: ${props => props.noWrap ? 'nowrap' : 'wrap'};
  justify-content: space-between;
  align-items: center;
}
`

export const InputWrap = styled.div`
  margin-left: 12px;
`
