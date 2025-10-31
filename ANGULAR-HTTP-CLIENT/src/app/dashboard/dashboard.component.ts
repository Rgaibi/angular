import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
      this.fetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  createTask(data: Task) {
    this.http.post<{name: string}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json', data, {headers: { myHeader: 'hello'}}).subscribe((response) => {
      console.log(data)
    })
  }

  private fetchAllTasks() {
    this.http.get<{[key: string]: Task}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
      let tasks = [];
      for(let key in response) {
        if(response.hasOwnProperty(key))
        tasks.push({...response[key], id: key})
      }
      return tasks;
    })).subscribe((response) => {
      console.log(response);
    });
  }
}
