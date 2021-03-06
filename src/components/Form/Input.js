import React from 'react';
import pt from 'prop-types';

import { Input as StyledInput } from './style';

export function Input(props) {
  return (
      <StyledInput
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
  )
}

Input.propTypes = {
  onChange: pt.func.isRequired,
  name: pt.string.isRequired,
  type: pt.string.isRequired,
};
