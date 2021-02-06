import React from 'react';
import pt from 'prop-types';
import { AppContext } from '../../AppContext';

import { Input as StyledInput } from './style';

export function Input(props) {
  return (
    <AppContext.Consumer>
      {(context) => (
        <StyledInput
          type={props.type}
          value={context[props.name]}
          name={props.name}
          onChange={props.onChange}
        />
      )}
    </AppContext.Consumer>
  )
}

Input.propTypes = {
  onChange: pt.func.isRequired,
  name: pt.string.isRequired,
  type: pt.string.isRequired,
};
