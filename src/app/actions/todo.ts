import { createAction } from '@ngrx/store';

const prefix = 'TODO';

export const add = createAction(`${prefix} ADD_ITEM`);
export const remove = createAction(`${prefix} REMOVE_ITEM`);
export const clear = createAction(`${prefix} CLEAR_ITEM`);
export const get = createAction(`${prefix} GET_ITEMS`);
export const mark = createAction(`${prefix} MARK_ITEM`);

