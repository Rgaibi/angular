import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  // CreateTask: EventEmitter<string> = new EventEmitter<string>();
  CreateTask = new Subject<string>();

  // onCreateTask(value: string) {
  //   this.CreateTask.emit(value)

  // }

    onCreateTask(value: string) {
    this.CreateTask.next(value)

  }
  

  
}
