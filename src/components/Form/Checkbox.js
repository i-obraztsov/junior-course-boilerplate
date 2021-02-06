import React from 'react';
import pt from 'prop-types';
import { AppContext } from '../../AppContext';

import { Checkbox as StyledCheckbox } from './style';

export function Checkbox(props) {
  return (
    <AppContext.Consumer>
      {(context) => {
        const { activeCategories } = context;
        return (
          <StyledCheckbox
            type={props.type}
            checked={activeCategories.includes(props.name)}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
          />
        )
      }}
    </AppContext.Consumer>
  )
}

Checkbox.propTypes = {
  name: pt.string.isRequired,
  onChange: pt.func.isRequired,
  checked: pt.bool,
  id: pt.string.isRequired,
  type: pt.string.isRequired,
};
