import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { IssueMessageThumbnailComponent } from 'src/app/core';
import { ColumnModel } from '../models';

@Directive({
  selector: '[appCellTypeChanger]',
})
export class CellTypeChangerDirective implements OnInit {
  @Input() cellType: string;
  @Input() cellRowData: any;
  @Input() cellColumnKey: string;
  @Input() cellColumnDefinitions: ColumnModel;

  constructor(
    public vc: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): any {
    this.initCell();
  }

  initCell(): void {
    const ref: ViewContainerRef = this.vc;
    var xxx = this.cellType;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      IssueMessageThumbnailComponent
    );
    const viewContainerRef = ref;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IssueMessageThumbnailComponent>(
      componentFactory
    );
  }
}
