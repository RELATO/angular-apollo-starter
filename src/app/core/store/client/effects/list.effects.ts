import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as actions from './../actions';
import { LoadClients } from './../actions';
import { ClientService } from '@core/store/client/services/client.service';


@Injectable()
export class ClientListEffects {

  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType<LoadClients>(actions.ClientListActionTypes.LoadClients),
    switchMap(({gridInfo}) =>
      this.clientService.getClientList(gridInfo)
        .pipe(
          map((clients) => new actions.LoadClientsSuccess(clients)),
          catchError(error => observableOf(new actions.LoadClientsFailure(error)))
        )
    )
  );

  constructor(private actions$: Actions, private clientService: ClientService) {
  }
}
