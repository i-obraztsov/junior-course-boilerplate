import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { logger } from 'csssr-school-utils/lib';

export const withLogRender = (Component) => {
  class LogRender extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (shallowCompare(this, nextProps, nextState)) {
        logger.call(this, LogRender.displayName, nextProps, nextState);
        return true;
      }

      return false;
    }

    render() {
      return <Component {...this.props} />
    }
  }

  LogRender.displayName = Component.name;
  return LogRender;
}
