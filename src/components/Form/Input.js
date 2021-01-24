import React from 'react';

import { Input as StyledInput } from './style';

export const Input = React.forwardRef(({type, defaultValue, ...rest}, ref) => (
  <StyledInput
      type={type}
      defaultValue={defaultValue}
      ref={ref}
      { ...rest }
    />
));
