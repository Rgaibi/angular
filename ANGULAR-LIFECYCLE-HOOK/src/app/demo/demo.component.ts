import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {
  @Input() message!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges triggered');
    console.log(changes);
  }  

}
