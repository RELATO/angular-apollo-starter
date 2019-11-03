import { GlobalState } from '@core/store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromList from './reducers/list.reducer';
import * as fromItem from './reducers/item.reducer';


export interface ClientState {
  list: fromList.ClientListState;
  item: fromItem.ClientItemState;
}

export interface State extends GlobalState {
  clients: ClientState;
}

export const CLIENT_REDUCERS: ActionReducerMap<ClientState, any> = {
  list: fromList.clientListReducer,
  item: fromItem.clientItemReducer
};


////// selectors

export const getProjectsState = createFeatureSelector<State, ClientState>('clients');


export const getClientListState = createSelector(getProjectsState, state => state.list);
export const getClientItemState = createSelector(getProjectsState, state => state.item);


export const getClientsIsLoading = createSelector(getClientListState, fromList.getIsLoading);

export const getClientsCount = createSelector(getClientListState, fromList.getCount);
export const getClientsOffset = createSelector(getClientListState, fromList.getOffset);

export const getClientsSortProp = createSelector(getClientListState, fromList.getSortProp);
export const getClientsSortDir = createSelector(getClientListState, fromList.getSortDir);

export const getSelectedClientId = createSelector(getClientListState, fromList.getSelectedId);


export const {
  selectEntities: getClientEntities,
  selectAll: getAllClients
} = fromList.adapter.getSelectors(getClientListState);


export const getSelectedClient = createSelector(
  getClientEntities,
  getSelectedClientId,
  (entities, selectedId) => {
    return selectedId !== null && entities[selectedId];
  }
);


// Item

export const getClientItemPending = createSelector(getClientItemState, fromItem.getPending);
export const getClientItemError = createSelector(getClientItemState, fromItem.getError);


