import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-OBSERVABLES';

  data: any[] = [];

  myObservable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
  });

  GetAsyncData() {
    this.myObservable.subscribe((val: any) => {
      this.data.push(val)
    });
  }

}
