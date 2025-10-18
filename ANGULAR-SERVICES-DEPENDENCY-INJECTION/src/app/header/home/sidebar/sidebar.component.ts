import { Component } from '@angular/core';
import { SubscribeSerice } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  onSubscribe() {
    let subscribeService = new SubscribeSerice();
    subscribeService.onSubscribeClicked();
  }
}
