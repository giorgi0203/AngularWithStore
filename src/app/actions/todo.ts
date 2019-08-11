import { createAction } from '@ngrx/store';
import { Action, ActionType } from '../interfaces';

const prefix = 'TODO';
// export constants
export const ADD_ITEM = `${prefix} ADD_ITEM`;
export const REMOVE_ITEM = `${prefix} REMOVE_ITEM`;
export const CLEAR_ITEMS = `${prefix} CLEAR_ITEM`;
export const GET_ITEMS = `${prefix} GET_ITEMS`;
export const MARK_ITEM = `${prefix} MARK_ITEM`;


// export action creators
export const addToDoItem: ActionType = (payload) => ({
    type: ADD_ITEM,
    payload
});
export const removeToDoItem: ActionType = (payload) => ({
    type: REMOVE_ITEM,
    payload
});
export const clearAllToDoItems: ActionType = (payload) => ({
    type: CLEAR_ITEMS,
    payload
});
export const getAllToDoItems: ActionType = (payload) => ({
    type: GET_ITEMS,
    payload
});
export const markToDoItemAsDone: ActionType = (payload) => ({
    type: MARK_ITEM,
    payload
});

