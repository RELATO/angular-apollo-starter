import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as TodoSelector from './todo/selectors';

import todoReducer from './todo/reducer';
import * as fromList from './client/reducers/list.reducer';
import * as fromItem from './client/reducers/item.reducer';

import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { apolloReducer } from 'apollo-angular-cache-ngrx';

export interface GlobalState {
  list: fromList.ClientListState;
  item: fromItem.ClientItemState;
  todo: TodoSelector.State;
  router: RouterReducerState;
  apollo: any;
}

export const reducers: ActionReducerMap<GlobalState> = {
  list: fromList.clientListReducer,
  item: fromItem.clientItemReducer,
  todo: todoReducer,
  router: routerReducer,
  apollo: apolloReducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production
  ? []
  : [];
