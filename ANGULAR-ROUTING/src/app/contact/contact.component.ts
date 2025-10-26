import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  email: string = '';
  country: string = '';
  message: string = '';

  isSubmitted: boolean = false;

  OnSubmit(){
    this.isSubmitted = true;
  }

  canExit(): boolean{
    console.log('canExit called!')
    if((this.firstName || this.email || this.message) && !this.isSubmitted)
      {
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else{
      return true;
    }
  }
}
