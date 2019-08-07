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



export const reducers: ActionReducerMap<State> = {
  app: todoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
