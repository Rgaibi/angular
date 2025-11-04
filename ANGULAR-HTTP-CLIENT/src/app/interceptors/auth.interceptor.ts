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


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({headers: request.headers.append('auth', 'azert')})
    return next.handle(modifiedReq).pipe(tap((event) => {  
            if(event.type === HttpEventType.Response){
                console.log('Response has arrived. Response data: ');
                console.log(event.body)
            }
        }));
  }
}
