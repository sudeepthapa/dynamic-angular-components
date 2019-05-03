import { Component, Input } from '@angular/core';
import { CompComponent } from '../comp.components';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements CompComponent {

  @Input() data: any;
  

}
