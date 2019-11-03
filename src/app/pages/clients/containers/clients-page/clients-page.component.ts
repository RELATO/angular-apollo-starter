import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from '../../../../core/store/client/models/client.model';

import * as fromClient from '../../../../core/store/client';
import { ClientItemActionTypes } from '../../../../core/store/client';
import { select, Store } from '@ngrx/store';
import { GridPayload } from '../../../../shared/models/grid.payload';
import { MatDialog } from '@angular/material';

import { ClientAddComponent } from '../client-add/client-add.component';
import { ClientUpdateComponent } from '../client-update/client-update.component';
import { Actions, ofType } from '@ngrx/effects';
import { takeUntil, tap } from 'rxjs/operators';
import { ClientDetailsComponent } from '../../components/client-details/client-details.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsPageComponent implements OnInit, OnDestroy {
  clients$: Observable<Client[]> = this.store.pipe(select(fromClient.getAllClients));
  clientsLoading$ = this.store.pipe(select(fromClient.getClientsIsLoading));

  clientsCount$: Observable<number> = this.store.pipe(select(fromClient.getClientsCount));
  clientsOffset$: Observable<number> = this.store.pipe(select(fromClient.getClientsOffset));

  private destroyed$ = new Subject<boolean>();
  private dialogRef = null;

  constructor(private readonly store: Store<fromClient.State>,
              public dialog: MatDialog,
              actions$: Actions) {
    actions$.pipe(
      ofType(
        ClientItemActionTypes.AddClientSuccess,
        ClientItemActionTypes.UpdateClientSuccess
      ),
      takeUntil(this.destroyed$),
      tap(() => {
        this.dialogRef.close();
        this.dialogRef = null;
      })
    ).subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  addItem(): void {
    this.dialogRef = this.dialog.open(ClientAddComponent, {
      width: '450px'
    });
  }

  onGridUpdate(info: GridPayload) {
    this.store.dispatch(new fromClient.LoadClients(info));
  }

  onItemSelected(client: Client) {
    this.dialog.open(ClientDetailsComponent, {
      width: '650px',
      data: client
    });
  }

  onItemUpdate(client: Client) {
    this.store.dispatch(new fromClient.SelectClient(client.id));

    this.dialogRef = this.dialog.open(ClientUpdateComponent, {
      width: '450px'
    });
  }

  onItemDelete(client: Client) {
    this.store.dispatch(new fromClient.DeleteClient(client.id));
  }
}
