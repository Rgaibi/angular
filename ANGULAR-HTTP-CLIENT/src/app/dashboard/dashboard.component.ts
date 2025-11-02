import { Component, inject, isDevMode, OnInit } from '@angular/core';
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
  currentTaskId: string = ''
  taskService: TaskService = inject(TaskService)
  editMode: boolean = false;
  selectedTask!: Task;

  ngOnInit(): void {
      this.fetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {title: '', description: '', assignedTo: '', createdAt: '', priority: '', status: ''}
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  createOrUpdateTask(data: Task) {
    if(!this.editMode) {
      this.taskService.createTask(data)
    }
    else {
      this.taskService.updateTask(this.currentTaskId, data)
    }
    
  
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

  onEditTaskclicked(id?: string) {
      this.currentTaskId = id!;
      this.showCreateTaskForm = true;
      this.editMode = true;
      this.selectedTask = this.allTasks.find((task) => {
        return task.id === id
      })!

  }


}
