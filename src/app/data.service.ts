import { Injectable } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { InsertComponent } from './insert-component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData() {
    return [
new InsertComponent(Component1Component, {name: 'Component 1', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda omnis incidunt, atque iste eius id cum error magni minima quasi vitae nemo voluptate voluptatum dicta similique possimus sunt molestiae", buttonText:"Lets go Component1"}),
new InsertComponent(Component2Component, {name: 'Component 2', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda omnis incidunt, atque iste eius id cum error magni minima Ab assumenda omnis incidunt, atque iste eius id cum error magni minima quasi vitae nemo voluptate voluptatum dicta similique possimus sunt molestiae", buttonText:"Lets go Component3"}),
new InsertComponent(Component3Component, {name: 'Component 3', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda omnis incidunt, atque iste eius id cum error magni minima quasi vitae nemo voluptate voluptatum dicta similique possimus sunt Ab assumenda omnis incidunt, atque iste eius id cum error magni minima Ab assumenda omnis incidunt, atque iste eius id cum error magni minima molestiae", buttonText:"Lets go Component2"}),




    ];
  }
  constructor() { }
}
