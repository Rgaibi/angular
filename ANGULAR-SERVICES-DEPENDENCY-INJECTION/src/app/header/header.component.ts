import { Component } from '@angular/core';
import { SubscribeSerice } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe() {
    let subscribeService = new SubscribeSerice();
    subscribeService.onSubscribeClicked();

  }  
}
