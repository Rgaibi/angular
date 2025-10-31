import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  @Output()CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitTaskData : EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }
  
  onFormSubmitted(form: NgForm) {
    this.emitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
