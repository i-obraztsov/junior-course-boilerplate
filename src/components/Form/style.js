import styled from 'styled-components';

export const StyledForm = styled.form`
  font-family: "Open Sans", "Roboto", "Arial", sans-serif;
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 4px 16px;
  margin-left: 12px;
  width: 91px;
  appearance: textfield;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #323C48;
  border: 1px solid #7E8FA4;
`

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
`

export const Legend = styled.legend`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #323C48;
`

export const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  margin-right: 16px;
  margin-bottom: 24px;

  :last-child {
    margin-right: 0;
  }
`

export const Button = styled.button`
  border: 0;
  font-size: 14px;
  font-weight: 400;
  padding: 9px;
  width: 100%;
  background-color: #323C48;
  color: #FFF;
  cursor: pointer;
`
