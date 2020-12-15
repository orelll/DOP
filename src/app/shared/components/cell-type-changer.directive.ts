import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TypesMappingService } from '../services/typesMapping/types-mapping.service';

@Directive({
  selector: '[appCellTypeChanger]',
})
export class CellTypeChangerDirective implements OnInit {
  @Input() cellType: string;
  @Input() cellRowData: any;
  @Input() cellId: number;

  constructor(
    public vc: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private typesMapper: TypesMappingService
  ) {}

  ngOnInit(): any {
    this.initCell();
  }

  initCell(): void {
    const entry = this.typesMapper.getEntry(this.cellType);

    const ref: ViewContainerRef = this.vc;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      entry[0]
    );
    const viewContainerRef = ref;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(
      componentFactory
    );

    entry[1](this.cellRowData, componentRef);
  }
}
