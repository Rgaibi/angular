import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'ANGULAR-OBSERVABLES';

  data: any[] = [];

  @ViewChild('createbtn')
  createBtn!: ElementRef

  createBtnObs: any;

  array1 = [1, 2, 6, 4, 9];
  array2 = ['a', 'b', 'd', 'e', 'z'];

  // myObservable = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.error(new Error('Something went wrong'));
  //   observer.next(4);
  //   observer.next(5);
  //   observer.complete();
  // });

  // myObservable = of(this.array1, this.array2, 30, 'hello', true);
     myObservable = from(this.array1)


  GetAsyncData() {
  //   this.myObservable.subscribe((val: any) => {
  //     this.data.push(val)
  //   },

  //   (err) => {
  //     alert(err.message)
  //   },
  //   () => {
  //     alert('All the data is streamed')
  //   }
  // );
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error: (err) => {
        alert(err.message)
      },
      complete: () => {
        alert('All the data is streamed')   
      }

    })
  }

  buttonClicked() {
    let count = 0
    this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click')
                        .subscribe((data) => {
                          console.log(data);
                          this.showItem(count++);
                        });
  }

  ngAfterViewInit(): void {
      this.buttonClicked();
  }

  showItem(val: number) {
    let div = document.createElement('div');
    div.innerText = 'Item' + val;
    document.getElementById('cont')!.appendChild(div);
  }

}
