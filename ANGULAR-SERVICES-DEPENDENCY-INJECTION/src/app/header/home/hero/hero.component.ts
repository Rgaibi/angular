import { Component } from '@angular/core';
import { SubscribeSerice } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  onSubscribe() {
    let subscribeService = new SubscribeSerice();
    subscribeService.onSubscribeClicked();
  }

}
