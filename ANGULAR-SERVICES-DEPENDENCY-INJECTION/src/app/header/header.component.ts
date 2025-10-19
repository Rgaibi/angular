import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  

})
export class HeaderComponent {

  selectedTab: string = 'home';

  constructor(private subService: SubscribeService) {}

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe() {
  
    this.subService.onSubscribeClicked();

  }  
}
