export const APPLY_FILTER = 'APPLY_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const applyFilter = (filter) => ({
  type: APPLY_FILTER,
  payload: { filter },
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
