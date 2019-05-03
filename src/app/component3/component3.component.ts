import { Component, OnInit, Input } from '@angular/core';
import { CompComponent } from '../comp.components';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements CompComponent {

  @Input() data: any;

}
