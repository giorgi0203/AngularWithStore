import { createReducer, on } from '@ngrx/store';
import { add, clear, get, remove, mark } from '../actions';
import { State } from '../interfaces/store';

export const initialState: State = {
    todos: [
        {
            id: 1,
            type: 'important',
            done: false,
            title: 'work',
            description: 'finish this todo app'
        },
        {
            id: 2,
            type: 'important',
            done: true,
            title: 'work1',
            description: 'finish this todo app'
        },
        {
            id: 3,
            type: 'important',
            done: false,
            title: 'work2',
            description: 'finish this todo app'
        }
    ]
};

export const todoReducer = createReducer(initialState,
    on(add, state => state),
    on(remove, state => state),
    on(clear, state => state),
    on(mark, state => state),
    on(get, state => state),
);
