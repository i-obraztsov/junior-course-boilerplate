import React  from 'react';
import { inputNumberMask } from '../utils/inputNumberMask';

export default function withInputNumber(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: this.props.value,
      }
    }

    handleChange = (event) => {
      const { handleChangeInput, name } = this.props;
      const maskedValue = inputNumberMask(event.target.value);

      handleChangeInput({ [name]: maskedValue })
      this.setState({ value: maskedValue })
    }

    render() {
      const { value, ...restProps } = this.props;
      return (
        <Component
          value={this.state.value}
          onChange={this.handleChange}
          {...restProps}
        />
      );
    }
  }
}
