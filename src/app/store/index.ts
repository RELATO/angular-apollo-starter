import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as TodoSelector from './todo/selectors';

import todoReducer from './todo/reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  apolloReducer,
} from 'apollo-angular-cache-ngrx';

export interface State {
  todo: TodoSelector.State;
  router: RouterReducerState;
  apollo: any;
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
  router: routerReducer,
  apollo: apolloReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
