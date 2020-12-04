import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoaderService } from '../loader.service';
import { DataStoreService } from '../store/data-store.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private dataStoreService: DataStoreService,
    private loaderService: LoaderService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();

    // if request has Authorization Header then don't set the header in request.
    if (!req.headers.has('Authorization')) {
      req = this.setHeaders(req);
    }

    return new Observable((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.loaderService.hide();
            observer.next(event);
          }
        },
        (err) => {
          this.loaderService.hide();
          observer.error(err);
        },
        () => {
          observer.complete();
        }
      );
      // remove request from queue when cancelled
      return () => {
        subscription.unsubscribe();
      };
    });
  }

  setHeaders(request: HttpRequest<any>): HttpRequest<any> {
    const token = this.dataStoreService.getToken();

    const authorizationToken = token
      ? token
      : 'Basic ' + btoa('web-census-client' + ':' + 'web');

    request = request.clone({
      setHeaders: {
        Authorization: authorizationToken,
        'Accept-Language': 'de-de',
      },
    });

    return request;
  }
}
