import { Component, inject } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;

http: HttpClient = inject(HttpClient)

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  createTask(data: Task) {
    this.http.post('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json', data, {headers: { myHeader: 'hello'}}).subscribe((response) => {
      console.log(data)
    })
  }
}
