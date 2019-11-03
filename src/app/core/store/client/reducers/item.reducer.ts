import { ClientActionTypes, ClientItemActionTypes } from '../actions';


export interface ClientItemState {
  error: string | null;
  pending: boolean;
}

export const initialState: ClientItemState = {
  error: null,
  pending: false,
};

export function clientItemReducer(state = initialState, action: ClientActionTypes): ClientItemState {
  switch (action.type) {
    case ClientItemActionTypes.AddClient:
    case ClientItemActionTypes.UpdateClient: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }

    case ClientItemActionTypes.AddClientSuccess:
    case ClientItemActionTypes.UpdateClientSuccess: {
      return {
        ...state,
        error: null,
        pending: false
      };
    }

    case ClientItemActionTypes.AddClientFailure:
    case ClientItemActionTypes.UpdateClientFailure: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default:
      return state;
  }
}

export const getError = (state: ClientItemState) => state.error;
export const getPending = (state: ClientItemState) => state.pending;
