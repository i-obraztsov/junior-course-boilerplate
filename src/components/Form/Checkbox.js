import React from 'react';
import pt from 'prop-types';

import { Checkbox as StyledCheckbox } from './style';

export function Checkbox(props) {
  return (
    <StyledCheckbox
      type={props.type}
      checked={props.checked}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
    />
  )
}

Checkbox.propTypes = {
  name: pt.string.isRequired,
  checked: pt.bool,
  id: pt.string.isRequired,
  type: pt.string.isRequired,
  onChange: pt.func.isRequired,
};
