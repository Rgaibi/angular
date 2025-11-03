import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  http: HttpClient = inject(HttpClient)
  logError(data: {statusCode: number, errorMessage : string, dateTime: Date}) {
    this.http.post('https://angular-http-261d5-default-rtdb.firebaseio.com/log.json', data).subscribe()
  }
  fetchErrors() {
    this.http.get('https://angular-http-261d5-default-rtdb.firebaseio.com/log.json').subscribe((data) => {
      console.log(data)
    })
  }
}
