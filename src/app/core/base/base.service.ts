import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadGridSuccessPayload } from '../../shared/models/grid.payload';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected http: HttpClient) {
  }

  protected gridRequest<T>(url, offset, property, direction): Observable<LoadGridSuccessPayload<T>> {
    return this.http
      .get<T[]>(url, {
        observe: 'response',
        params: {
          _page: offset + 1,
          _limit: '10',
          _sort: property,
          _order: direction
        }
      })
      .pipe(
        map(response => ({
          count: Number(response.headers.get('X-Total-Count')),
          data: response.body
        }))
      );
  }
}
