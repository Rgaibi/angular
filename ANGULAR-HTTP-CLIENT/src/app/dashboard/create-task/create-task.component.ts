import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements AfterViewInit {

  @Input() isEditMode: boolean = false;
  @Input() selectedTask!: Task
  @ViewChild('taskForm') taskForm!: NgForm;

  @Output()CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitTaskData : EventEmitter<Task> = new EventEmitter<Task>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0);
  }    

  OnCloseForm(){
    this.CloseForm.emit(false);
  }
  
  onFormSubmitted(form: NgForm) {
    this.emitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
