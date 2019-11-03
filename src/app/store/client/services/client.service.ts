import { Injectable } from '@angular/core';
import { BaseService } from '@core/base/base.service';
import { map } from 'rxjs/operators';
import {
  Client,
  ClientApiModel,
} from 'src/app/store/client/models/client.model';
import { GridPayload } from '../../../shared/models/grid.payload';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  apiUrl = environment.apiUrl;

  getClientList(gridInfo: GridPayload) {
    return this.gridRequest<ClientApiModel>(
      this.apiUrl + '/clients',
      gridInfo.offset,
      gridInfo.sortProp,
      gridInfo.sortDir
    ).pipe(
      map(response => ({
        ...response,
        data: response.data.map(client => new Client(client)),
      }))
    );
  }

  addClient(payload: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl + '/clients', payload);
  }

  updateClient(payload: Client): Observable<Client> {
    return this.http.put<Client>(
      `${this.apiUrl}/clients/${payload.id}`,
      payload
    );
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.apiUrl}/clients/${id}`);
  }
}
