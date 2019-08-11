import { createReducer, on, combineReducers } from '@ngrx/store';
import { ADD_ITEM, CLEAR_ITEMS, GET_ITEMS, MARK_ITEM, REMOVE_ITEM } from '../actions';
// import { State } from '../interfaces/store';

export const initialState = {
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
// on(add, state => state),
// on(remove, state => state),
// on(clear, state => state),
// on(mark, state => state),
// on(get, state => state),
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, todos: [...state.todos, action.payload] };
        case CLEAR_ITEMS:
            return { ...state, todos: [] };
        // case GET_ITEMS:
        //     return { ...state, todos: [...state.todos, action.payload] };
        // case MARK_ITEM:
        //     return { ...state, todos: [...state.todos, action.payload] };
        // case REMOVE_ITEM:
        //     return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
};
