import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log('Auth Interceptor called!');
        const modifiedReq = req.clone({headers: req.headers.append('auth', 'abcxyz')})
        return next.handle(modifiedReq).pipe(tap((event) => {  
            if(event.type === HttpEventType.Response){
                console.log('Response has arrived. Response data: ');
                console.log(event.body)
            }
        }));
  }
}
