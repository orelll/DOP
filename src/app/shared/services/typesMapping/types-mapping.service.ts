import { ComponentRef, Injectable } from '@angular/core';
import { IssueMessageThumbnailComponent } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class TypesMappingService {
  private supportedComponents: { [id: string]: any } = {};
  private postCreationActions: {
    [id: string]: (
      cellRowData: any,
      cellType: string,
      componentRef: ComponentRef<any>
    ) => void;
  } = {};

  constructor() {
    this.buildSupportedList();
    this.buildActions();
  }

  public getEntry(
    key: string
  ): [
    any,
    (
      cellRowData: any,
      cellType: string,
      componentRef: ComponentRef<any>
    ) => void
  ] {
    return  [this.supportedComponents[key], this.postCreationActions[key]];
  }

  private buildSupportedList(): void {
    this.supportedComponents = [];

    this.addTypeEntry(this.supportedComponents, IssueMessageThumbnailComponent);
  }

  private buildActions(): void {
    this.addActionEntry(
      IssueMessageThumbnailComponent,
      this.handleIssueMessageThumbnailComponentCration
    );
  }

  private addActionEntry(
    entry: any,
    func: (
      cellRowData: any,
      cellType: string,
      componentRef: ComponentRef<any>
    ) => void
  ): void {
    const stringName = entry.name;
    this.postCreationActions[stringName] = func;
  }

  private addTypeEntry(collection: { [id: string]: any }, entry: any): void {
    const stringName = entry.name;
    collection[stringName] = entry;
  }

  private handleIssueMessageThumbnailComponentCration(
    cellRowData: any,
    cellType: string,
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as IssueMessageThumbnailComponent;

    component.message = cellRowData;
  }
}
