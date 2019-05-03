import { Component, OnInit, Input } from '@angular/core';
import { CompComponent } from '../comp.components';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements CompComponent {

  @Input() data: any;


}
