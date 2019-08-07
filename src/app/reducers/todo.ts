import { createReducer, on } from '@ngrx/store';
import { add, clear, get, remove } from '../actions';
import { State } from '../interfaces/store';

export const initialState: State = {
    todos: [
        {
            type: 'important',
            done: false,
            title: 'work',
            description: 'finish this todo app'
        }
    ]
};

export const todoReducer = createReducer(initialState,
    on(add, state => state),
    on(remove, state => state),
    on(clear, state => state),
);
