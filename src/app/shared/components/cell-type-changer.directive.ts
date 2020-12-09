import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { IssueMessageThumbnailComponent } from 'src/app/core';

@Directive({
  selector: '[appCellTypeChanger]',
})
export class CellTypeChangerDirective implements OnInit {
  @Input() cellType: string;
  @Input() cellRowData: any;
  @Input() cellId: number;

  private supportedComponents: { [id: string]: any } = {};

  constructor(
    public vc: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.buildSupportedList();
  }

  ngOnInit(): any {
    this.initCell();
  }

  initCell(): void {
    const entry = this.getEntry(this.cellType);
    
    const ref: ViewContainerRef = this.vc;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      entry
    );
    const viewContainerRef = ref;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
  }

  private buildSupportedList(): void {
    this.supportedComponents = [];

    this.addEntry(this.supportedComponents, IssueMessageThumbnailComponent);
  }

  private addEntry(collection: { [id: string]: any }, entry: any): void {
    const stringName = entry.name;
    collection[stringName] = entry;
  }

  private getEntry(key: string): any {
    return this.supportedComponents[key];
  }
}
