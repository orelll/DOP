import { Component, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { sortBy, orderBy, cloneDeep } from 'lodash';
import { Sort, SortDirection } from '@angular/material/sort';
import { ColumnModel } from '../../models/columnModel';
import { TableModel } from '../../models/tableModel';
import { tableSymbol } from '../../decorators/columnDecorator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IssueMessageThumbnailComponent } from 'src/app/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private _data = [];
  private _originalData: any[] = [];
  private _tableModel: TableModel;

  @Input() set data(values: any[]) {
    if (values && values.length > 0) {
      this._data = cloneDeep(values);
      this._tableModel = this._data[0][tableSymbol];
      this.buildColumns();
      if (!this._originalData.length) {
        // Keep original order of data
        this._originalData = cloneDeep(this._data);
      }
    }
  }
  get data(): any[] {
    return this._data;
  }
  @Input() instance: any;

  columns: ColumnModel[];
  displayedColumns: string[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {}

  sortData(params: Sort): void {
    const direction: SortDirection = params.direction;
    this.data = direction
      ? orderBy(this.data, [params.active], [direction])
      : this._originalData;
  }

  prepareCell(cellValue: any, type: string): any {
    switch (type) {
      case 'String':
        return cellValue;
      case 'Date':
        var picker = new MatDatepickerModule();

        try {


          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IssueMessageThumbnailComponent);

          const viewContainerRef = this.viewContainerRef;
          var x = componentFactory.create(viewContainerRef.injector);
          return x ; //const componentRef = viewContainerRef.createComponent<MatDatepickerModule>(componentFactory);
        } catch (error) {

        }
        //componentRef.instance.data = adItem.data;
        return cellValue;
    }
  }

  private buildColumns() {
    this.columns = this._tableModel.columns;
    this.sortColumns();
    this.displayedColumns = this.columns.map(col => col.key);
  }

  private sortColumns(): void {
    this.columns = sortBy(this.columns, ['order']);
  }
}
