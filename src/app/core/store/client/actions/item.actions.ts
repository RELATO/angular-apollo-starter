import { Action } from '@ngrx/store';
import { Client } from '@core/store/client/models/client.model';


export enum ClientItemActionTypes {
  AddClient = '[Clients] Add Client',
  AddClientSuccess = '[Clients] Add Client Success',
  AddClientFailure = '[Clients] Add Client Failure',

  UpdateClient = '[Clients] Update Client',
  UpdateClientSuccess = '[Clients] Update Client Success',
  UpdateClientFailure = '[Clients] Update Client Failure',

  DeleteClient = '[Clients] Delete Client',
  DeleteClientSuccess = '[Clients] Delete Client Success',
  DeleteClientFailure = '[Clients] Delete Client Failure',
}

////////////

export class AddClient implements Action {
  readonly type = ClientItemActionTypes.AddClient;

  constructor(public payload: Client) {
  }
}

export class AddClientSuccess implements Action {
  readonly type = ClientItemActionTypes.AddClientSuccess;

  constructor(public payload: Client) {
  }
}

export class AddClientFailure implements Action {
  readonly type = ClientItemActionTypes.AddClientFailure;

  constructor(public payload: string) {
  }
}

export class UpdateClient implements Action {
  readonly type = ClientItemActionTypes.UpdateClient;

  constructor(public payload: Client) {
  }
}

export class UpdateClientSuccess implements Action {
  readonly type = ClientItemActionTypes.UpdateClientSuccess;

  constructor(public payload: Client) {
  }
}

export class UpdateClientFailure implements Action {
  readonly type = ClientItemActionTypes.UpdateClientFailure;

  constructor(public payload: string) {
  }
}

export class DeleteClient implements Action {
  readonly type = ClientItemActionTypes.DeleteClient;

  constructor(public payload: number) {
  }
}

export class DeleteClientSuccess implements Action {
  readonly type = ClientItemActionTypes.DeleteClientSuccess;

  constructor(public payload: number) {
  }
}

export class DeleteClientFailure implements Action {
  readonly type = ClientItemActionTypes.DeleteClientFailure;

  constructor(public payload: string) {
  }
}

////////////

export type ItemActions =
  | AddClient
  | AddClientSuccess
  | AddClientFailure
  | UpdateClient
  | UpdateClientSuccess
  | UpdateClientFailure
  | DeleteClient
  | DeleteClientSuccess
  | DeleteClientFailure;
