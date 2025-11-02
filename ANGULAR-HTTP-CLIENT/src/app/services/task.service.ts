import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/task';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 http: HttpClient = inject(HttpClient);
 createTask(task: Task) {
    this.http.post<{name: string}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json', task, {headers: { myHeader: 'hello'}}).subscribe((response) => {
      console.log(task);
    
    })  
 }

   deleteTask(id?: string) {
    this.http.delete('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks/' + id +'.json').subscribe()
  }

    deleteAllTasks() {
    this.http.delete('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json').subscribe()
  }

    getAllTasks() {
      return this.http.get<{[key: string]: Task}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
        let tasks = [];
        for(let key in response) {
          if(response.hasOwnProperty(key))
          tasks.push({...response[key], id: key})
        }
        return tasks;
      }))
    }

    updateTask(id: string, data: Task) {
      return this.http.put('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks/' + id +'.json', data).subscribe()
    }
}

