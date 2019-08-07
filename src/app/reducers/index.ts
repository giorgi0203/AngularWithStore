import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { State } from '../interfaces/store';
import { todoReducer } from './todo';
import { InjectionToken } from '@angular/core';



export const reducers: ActionReducerMap<State> = {
  app: todoReducer
};

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers', {
  factory: () => {
    return reducers;
  }
});


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
