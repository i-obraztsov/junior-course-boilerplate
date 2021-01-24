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
    const { name } = event.currentTarget;
    const newValue = +event.target.value.replace(/\D/g, '');
    const { handleChangeInput } = this.props;

    handleChangeInput({ [name]: newValue })
    this.setState({ value: newValue });
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;

    return (
      <StyledInput
        type="text"
        value={value}
        name={name}
        onChange={this.handleValue}
      />
    )
  }
}

InputNumber.propTypes = {
  value: pt.number.isRequired,
  name: pt.string.isRequired,
};
