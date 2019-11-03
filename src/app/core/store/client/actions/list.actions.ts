import { Action } from '@ngrx/store';
import { ClientApiModel } from '@core/store/client/models/client.model';
import { GridPayload, LoadGridSuccessPayload } from '../../../../shared/models/grid.payload';


export enum ClientListActionTypes {
  LoadClients = '[Clients] Load',
  LoadClientsSuccess = '[Clients] Load Success',
  LoadClientsFailure = '[Clients] Load Failure',

  SelectClient = '[Client] Select Client',
}

////////////

export class SelectClient implements Action {
  readonly type = ClientListActionTypes.SelectClient;

  constructor(public payload: number) {
  }
}

export class LoadClients implements Action {
  readonly type = ClientListActionTypes.LoadClients;

  constructor(public gridInfo: GridPayload) {
  }
}

export class LoadClientsSuccess implements Action {
  readonly type = ClientListActionTypes.LoadClientsSuccess;

  constructor(public payload: LoadGridSuccessPayload<ClientApiModel>) {
  }
}

export class LoadClientsFailure implements Action {
  readonly type = ClientListActionTypes.LoadClientsFailure;

  constructor(public payload: any) {
  }
}

////////////

export type ListActions =
  | SelectClient
  | LoadClients
  | LoadClientsSuccess
  | LoadClientsFailure;
