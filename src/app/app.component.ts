import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { DataService } from "./data.service";
import { InsertComponent } from './insert-component';
import { CompComponent } from './comp.components';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  components:InsertComponent[];
  public buttonComponents;
  title = "dynamic-components";
  componentRef: any;
  @ViewChild("loadComponent", { read: ViewContainerRef })
  entry: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private dataService: DataService
    ) {}


buttons = [];



  createComponent(Id: number) {
    this.entry.clear();
    if ( Id ) {
      const factory = this.resolver.resolveComponentFactory(
        this.components[Id - 1].component
      );
      this.componentRef = this.entry.createComponent(factory);
    }
    // if (Id === 1) {
    //   const factory = this.resolver.resolveComponentFactory(
    //     Component1Component
    //   );
    //   this.componentRef = this.entry.createComponent(factory);
    // } else if (Id === 2) {
    //   const factory = this.resolver.resolveComponentFactory(
    //     Component2Component
    //   );
    //   this.componentRef = this.entry.createComponent(factory);
    // } else if (Id === 3) {
    //   const factory = this.resolver.resolveComponentFactory(
    //     Component3Component
    //   );
    //   this.componentRef = this.entry.createComponent(factory);
    // }
    (<CompComponent>this.componentRef.instance).data = this.components[Id - 1].data;
  }
  destroyComponent() {
    this.componentRef.destroy();
  };

  getButton(){
    return this.components.map(component=>component.data.name);
  }

  ngOnInit() {
    this.components = this.dataService.getData();
    this.buttons = this.getButton();
  }

}
