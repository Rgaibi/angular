import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/task';
import { catchError, map, throwError } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

 http: HttpClient = inject(HttpClient);
 loggingService: LoggingService = inject(LoggingService);


 createTask(task: Task) {
    this.http.post<{name: string}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json', task, {headers: { myHeader: 'hello'}}).pipe(catchError((err) => {
        const ErrorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()}
        this.loggingService.logError(ErrorObj)
        return throwError(() => err)
      })).subscribe((response) => {
      console.log(task);
    
    })  
 }

   deleteTask(id?: string) {
    this.http.delete('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks/' + id +'.json').pipe(catchError((err) => {
        const ErrorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()}
        this.loggingService.logError(ErrorObj)
        return throwError(() => err)
      })).subscribe()
  }

    deleteAllTasks() {
    this.http.delete('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json').pipe(catchError((err) => {
        const ErrorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()}
        this.loggingService.logError(ErrorObj)
        return throwError(() => err)
      })).subscribe()
    
  }

    getAllTasks() {
      return this.http.get<{[key: string]: Task}>('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
        let tasks = [];
        for(let key in response) {
          if(response.hasOwnProperty(key))
          tasks.push({...response[key], id: key})
        }
        return tasks;
      }), catchError((err) => {
        const ErrorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()}
        this.loggingService.logError(ErrorObj)
        return throwError(() => err)
      }))
    }

    updateTask(id: string, data: Task) {
      return this.http.put('https://angular-http-261d5-default-rtdb.firebaseio.com/tasks/' + id +'.json', data).pipe(catchError((err) => {
        const ErrorObj = {statusCode: err.status, errorMessage: err.message, dateTime: new Date()}
        this.loggingService.logError(ErrorObj)
        return throwError(() => err)
      })).subscribe()
    }
}

