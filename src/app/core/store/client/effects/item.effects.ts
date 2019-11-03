import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';

import * as actions from './../actions';
import { AddClient, ClientItemActionTypes, DeleteClient, UpdateClient } from './../actions';
import * as fromClient from './../client.state';

import { Client } from '@core/store/client/models/client.model';
import { ClientService } from '@core/store/client/services/client.service';
import { GridPayload } from '../../../../shared/models/grid.payload';


@Injectable()
export class ClientItemEffects {

  @Effect()
  addClient$: Observable<Action> = this.actions$.pipe(
    ofType<AddClient>(ClientItemActionTypes.AddClient),
    map((action) => action.payload),
    exhaustMap((client: Client) =>
      this.clientService.addClient(client)
        .pipe(
          map((payload: Client) => new actions.AddClientSuccess(payload)),
          catchError((e) => observableOf(new actions.AddClientFailure(e.error.error)))
        )
    )
  );

  @Effect()
  updateClient$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateClient>(ClientItemActionTypes.UpdateClient),
    map((action) => action.payload),
    exhaustMap((client: Client) =>
      this.clientService.updateClient(client)
        .pipe(
          map((payload: Client) => new actions.UpdateClientSuccess(payload)),
          catchError((e) => observableOf(new actions.UpdateClientFailure(e.error.error)))
        )
    )
  );

  @Effect()
  deleteClient$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteClient>(ClientItemActionTypes.DeleteClient),
    map((action) => action.payload),
    exhaustMap((id: number) =>
      this.clientService.deleteClient(id)
        .pipe(
          map(() => new actions.DeleteClientSuccess(id)),
          catchError((e) => observableOf(new actions.DeleteClientFailure(e.error.error)))
        )
    )
  );

  @Effect({dispatch: false})
  reloadGrid$: Observable<any> = this.actions$.pipe(
    ofType(
      ClientItemActionTypes.AddClientSuccess,
      ClientItemActionTypes.DeleteClientSuccess
    ),
    withLatestFrom(
      this.store.pipe(select(fromClient.getClientsOffset)),
      this.store.pipe(select(fromClient.getClientsSortProp)),
      this.store.pipe(select(fromClient.getClientsSortDir)),
      (action, offset, sortProp, sortDir) => ({offset, sortProp, sortDir})
    ),
    tap((info: GridPayload) => {
      this.store.dispatch(new actions.LoadClients(info));
    })
  );

  @Effect({dispatch: false})
  closeModal$: Observable<any> = this.actions$.pipe(
    ofType(
      ClientItemActionTypes.AddClientSuccess,
      ClientItemActionTypes.UpdateClientSuccess
    ),
    tap(() => {
      // this.store.dispatch(new actions.LoadClients(info));
    })
  );

  constructor(
    private store: Store<fromClient.State>,
    private actions$: Actions,
    private clientService: ClientService) {
  }
}
