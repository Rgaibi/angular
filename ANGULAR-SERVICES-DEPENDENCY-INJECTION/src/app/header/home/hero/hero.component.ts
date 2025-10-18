import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [SubscribeService]

})
export class HeroComponent {

    constructor(private subService: SubscribeService) {}

  onSubscribe() {
    
    this.subService.onSubscribeClicked();
  }

}
