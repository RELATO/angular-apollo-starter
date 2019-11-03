import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Client } from '@core/store/client/models/client.model';
import { ClientActionTypes, ClientItemActionTypes, ClientListActionTypes } from '@core/store/client/actions';


export interface ClientListState extends EntityState<Client> {
  isLoading: boolean;
  selectedClientId: number | null;

  count: number;
  offset: number;

  sortProp: string;
  sortDir: string;
}


export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>({
  selectId: (client: Client) => client.id,
});


export const initialState: ClientListState = adapter.getInitialState({
  isLoading: false,
  selectedClientId: null,

  count: 0,
  offset: 0,

  sortProp: 'id',
  sortDir: 'asc'
});


export function clientListReducer(state = initialState, action: ClientActionTypes): ClientListState {
  switch (action.type) {

    case ClientListActionTypes.LoadClients: {
      return {
        ...state,
        ...action.gridInfo,
        isLoading: true,
      };
    }

    case ClientListActionTypes.LoadClientsSuccess: {
      return adapter.addMany(action.payload.data as Client[], {
        ...adapter.removeAll(state),
        isLoading: false,
        count: action.payload.count
      });
    }

    case ClientItemActionTypes.UpdateClientSuccess: {
      return adapter.upsertOne(action.payload, state);
    }

    case ClientListActionTypes.SelectClient: {
      return {
        ...state,
        selectedClientId: action.payload
      };
    }

    default:
      return state;
  }
}


export const getIsLoading = (state: ClientListState) => state.isLoading;

export const getCount = (state: ClientListState) => state.count;
export const getOffset = (state: ClientListState) => state.offset;

export const getSortProp = (state: ClientListState) => state.sortProp;
export const getSortDir = (state: ClientListState) => state.sortDir;

export const getSelectedId = (state: ClientListState) => state.selectedClientId;
