import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromClient from '../../../../core/store/client';
import { Client } from '../../../../core/store/client/models/client.model';


@Component({
  selector: 'app-client-add-panel',
  templateUrl: './client-add.component.html'
})
export class ClientAddComponent {
  pending$ = this.store.pipe(select(fromClient.getClientItemPending));
  error$ = this.store.pipe(select(fromClient.getClientItemError));

  constructor(private readonly store: Store<fromClient.State>) {
  }

  onSubmit($event: Client) {
    this.store.dispatch(new fromClient.AddClient($event));
  }
}
