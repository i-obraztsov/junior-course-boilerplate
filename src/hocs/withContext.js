import React from 'react';

import { AppContext } from '../AppContext';

export default function withContext(Component) {
  return class extends React.Component {
    render() {
      const { value, ...restProps } = this.props;
      return (
        <AppContext.Consumer>
          {(context) => {
            let key = 'value';
            let value = context[this.props.name];

            if (this.props.type === 'checkbox') {
              key = 'checked';
              value = context.activeCategories.includes(this.props.name);
            }

            const props = {
              [key]: value,
              onChange: context.handleChange,
            };

            return <Component {...props} {...restProps} />;
          }}
        </AppContext.Consumer>
      );
    }
  };
}
