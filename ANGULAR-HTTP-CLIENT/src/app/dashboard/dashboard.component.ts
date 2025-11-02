import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  allTasks: Task[] = []
  http: HttpClient = inject(HttpClient);
  taskService: TaskService = inject(TaskService)

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
    this.taskService.createTask(data)
  }

  fetchAllTasksClicked() {
    this.fetchAllTasks()
  }

  private fetchAllTasks() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.allTasks = tasks
    })

    // this.http.get('…/tasks.json').subscribe(response => {
    //   const tasks = [];
    //   for (let key in response) {
    //     if (response.hasOwnProperty(key)) {
    //       tasks.push({ ...response[key], id: key });
    //     }
    //   }
    //   console.log(tasks);
    // });    

  }

  deleteTask(id?: string) {
    this.taskService.deleteTask(id)
  }

  deleteAllTasks() {
    this.taskService.deleteAllTasks()
  }


}
