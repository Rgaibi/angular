import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-LIFECYCLE-HOOK';
  inputVal: string = '';
  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
