import React from 'react';
import pt from 'prop-types';
import { LogRender } from '../LogRender';

import { Input as StyledInput } from './style';

export class InputNumber extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    }
  }

  handleValue = (event) => {
    let newValue = event.target.value.replace(/\D/g, '');

    this.setState({ value: +newValue });
  }

  render() {
    const { value } = this.state;

    return (
      <StyledInput
        type="number"
        value={value}
        onChange={this.handleValue}
      />
    )
  }
}

InputNumber.propTypes = {
  value: pt.number.isRequired,
};
