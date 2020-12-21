import { ComponentFactoryResolver, Directive, OnInit, ViewContainerRef } from '@angular/core';
import { UnprocessedMessage } from '../models/unprocessedMessage';
import { TypesMappingService } from '../services/types-mapping/types-mapping.service';

@Directive({
  selector: '[appActionBarSelector]',
})
export class ActionBarSelectorDirective implements OnInit {
  constructor(
    public vc: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private typesMapper: TypesMappingService
  ) {}

  ngOnInit(): void {
   this.initActionBar();
  }

  initActionBar(): void {
   const entry = this.typesMapper.getActionBar(UnprocessedMessage.name);

   const ref: ViewContainerRef = this.vc;
   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(entry
   );
   const viewContainerRef = ref;
   viewContainerRef.clear();

   const componentRef = viewContainerRef.createComponent<any>(
     componentFactory
   );
 }
}
