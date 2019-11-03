import { Injectable } from '@angular/core';
import { BaseService } from '@core/base/base.service';
import { map } from 'rxjs/operators';
import { Client, ClientApiModel } from '@core/store/client/models/client.model';
import { GridPayload } from '../../../../shared/models/grid.payload';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService {
  getClientList(gridInfo: GridPayload) {
    return this.gridRequest<ClientApiModel>('/clients', gridInfo.offset, gridInfo.sortProp, gridInfo.sortDir)
      .pipe(
        map(response => ({
          ...response,
          data: response.data.map(client => new Client(client))
        }))
      );
  }

  addClient(payload: Client): Observable<Client> {
    return this.http.post<Client>('/clients', payload);
  }

  updateClient(payload: Client): Observable<Client> {
    return this.http.put<Client>(`/clients/${payload.id}`, payload);
  }

  deleteClient(id: number) {
    return this.http.delete(`/clients/${id}`);
  }
}
