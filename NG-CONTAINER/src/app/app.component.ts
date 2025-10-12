import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-CONTAINER';
  toggle: boolean = true;

  onToggle() {
    this.toggle = !this.toggle
  }
}
