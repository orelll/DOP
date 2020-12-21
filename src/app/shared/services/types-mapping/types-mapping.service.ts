import { ComponentRef, Injectable } from '@angular/core';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions/unprocessed-search-actions.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { UnprocessedMessage } from '../../models/unprocessedMessage';
import { CommonActionBarComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/common-action-bar/common-action-bar.component';
import { UnprocessedActionCheckComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/check-component/unprocessed-action-check.component';
import { ActionsComponentsEnum } from '../../models/actions-components-enum';

@Injectable({
  providedIn: 'root',
})
export class TypesMappingService {
  private supportedComponents: { [id: string]: any } = {};
  private postCreationActions: {
    [id: string]: (cellRowData: any, componentRef: ComponentRef<any>) => void;
  } = {};

  private typeToComponentDictionary = new Map<string, string>();
  private supportedActionBars: { [id: string]: any } = {};

  constructor() {
    this.buildSupportedList();
    this.buildMappingDictionary();
    this.buildActions();
    this.buildEntityToActionBarDictionary();
  }

  public getEntry(
    key: string
  ): [any, (cellRowData: any, componentRef: ComponentRef<any>) => void] {
    const mapKeyFound = this.typeToComponentDictionary.get(key);

    const supportedComponent = this.supportedComponents[mapKeyFound];
    const action = this.postCreationActions[mapKeyFound];
    return [supportedComponent, action];
  }

  public getActionBar(key: string): any {
    const resolvedActionBar = this.supportedActionBars[key];
    return resolvedActionBar;
  }

  private buildSupportedList(): void {
    this.supportedComponents = [];
    this.addTypeEntry(this.supportedComponents, IssuesSearchActionsComponent);
    this.addTypeEntry(
      this.supportedComponents,
      UnprocessedSearchActionsComponent
    );
    this.addTypeEntry(this.supportedComponents, MatCheckbox);
    this.addTypeEntry(
      this.supportedComponents,
      UnprocessedActionCheckComponent
    );
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
    this.addActionEntry(MatCheckbox, () => {});
    this.addActionEntry(
      UnprocessedActionCheckComponent,
      this.handleUnprocessedActionCheckComponentCration
    );
  }

  private buildMappingDictionary(): void {
    this.typeToComponentDictionary.set(Boolean.name, MatCheckbox.name);
    this.typeToComponentDictionary.set(
      ActionsComponentsEnum.UnprocessedMessagesCheckComponent,
      UnprocessedActionCheckComponent.name
    );

    for (let key in this.supportedComponents) {
      const component = this.supportedComponents[key];
      this.typeToComponentDictionary.set(component.name, component.name);
    }
  }

  private buildEntityToActionBarDictionary(): void {
    const entityKey = UnprocessedMessage.name;
    const actionBar = CommonActionBarComponent;
    this.supportedActionBars[entityKey] = actionBar;
  }

  private addActionEntry(
    entry: any,
    func: (cellRowData: any, componentRef: ComponentRef<any>) => void
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
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as IssuesSearchActionsComponent;

    component.message = cellRowData;
  }

  private handleUnprocessedSearchActionsComponentCration(
    cellRowData: any,
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as UnprocessedSearchActionsComponent;

    component.message = cellRowData;
  }

  private handleUnprocessedActionCheckComponentCration(
    cellRowData: any,
    componentRef: ComponentRef<any>
  ): void {
    const component = componentRef.instance as UnprocessedActionCheckComponent;
    const castedData = cellRowData as UnprocessedMessage;

    component.id = castedData.id;
    component.checked = castedData.checked;
  }
}
