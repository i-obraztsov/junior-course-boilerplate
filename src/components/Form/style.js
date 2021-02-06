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

export const Button = styled.button`
  display: block;
  border: ${props => props.secondary ? '1px solid #323C48' : 0};
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
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

export const LabelAsButton = styled(Button)`
  border-radius: 15px;
  margin-bottom: 24px;
  border-color: #7E8FA4;
  color: #7E8FA4;
  text-transform: capitalize;
`

export const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  :checked + Label {
    color: #FFF;
    background-color: #323C48;
  }

  :focus + Label {
    outline: 2px solid #4A90E2;
    outline-offset: 2px;
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
