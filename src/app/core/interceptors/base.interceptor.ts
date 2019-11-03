import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';


@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private config: ConfigService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({
      url: req.url.startsWith(this.config.API_URL) ? req.url : this.config.API_URL + req.url
    });

    return next.handle(modified);
  }
}
