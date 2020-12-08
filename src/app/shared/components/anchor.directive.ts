import { Directive, Inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-component-container]',
})

export class AppComponentContainer {
  constructor(public vc: ViewContainerRef) {
    vc.constructor.name === "ViewContainerRef_"; // true
  }
}