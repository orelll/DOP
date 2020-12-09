import { ComponentRef, Injectable } from '@angular/core';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions/unprocessed-search-actions.component';

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

    this.addTypeEntry(this.supportedComponents, IssuesSearchActionsComponent);
    this.addTypeEntry(this.supportedComponents, UnprocessedSearchActionsComponent);
  }

  private buildActions(): void {
    this.addActionEntry(
      IssuesSearchActionsComponent,
      this.handleIssuesSearchActionsComponentCration
    );
    this.addActionEntry(
      UnprocessedSearchActionsComponent,
      this.handleUnprocessedSearchActionsComponentCration
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

  private handleIssuesSearchActionsComponentCration(
    cellRowData: any,
    cellType: string,
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as IssuesSearchActionsComponent;

    component.message = cellRowData;
  }


  private handleUnprocessedSearchActionsComponentCration(
    cellRowData: any,
    cellType: string,
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as UnprocessedSearchActionsComponent;

    component.message = cellRowData;
  }
}
