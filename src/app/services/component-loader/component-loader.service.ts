import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(componentClass: string) {

  }
}
