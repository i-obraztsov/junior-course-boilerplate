import React from 'react';

import { StyledForm } from './style';

export function Form({ children, method = 'POST', action='#', onSubmit }) {
  return (
    <StyledForm method={method} action={action} onSubmit={onSubmit}>
      { children }
    </StyledForm>
  )
}
