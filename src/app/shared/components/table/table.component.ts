import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { sortBy, orderBy, cloneDeep } from 'lodash';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { ColumnModel } from '../../models/columnModel';
import { TableModel } from '../../models/tableModel';
import { tableSymbol } from '../../decorators/columnDecorator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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

      this.dataSource = new MatTableDataSource(this._data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator.firstPage();

      this._tableModel = this._data[0][tableSymbol];
      this.buildColumns();
      if (!this._originalData.length) {
        this._originalData = cloneDeep(this._data);
      }
    }
  }

  get data(): any[] {
    return this._data;
  }

  @Input() set dataSchema(value: TableModel) {
    if (value) {
      this._tableModel = value;
      this.buildColumns();
    }
  }
  columns: ColumnModel[];
  displayedColumns: string[];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortData(params: Sort): void {
    const direction: SortDirection = params.direction;
    this.data = direction
      ? orderBy(this.data, [params.active], [direction])
      : this._originalData;
  }

  renderComponent(columnKey: string): boolean {
    return columnKey.includes('Component');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private buildColumns(): void {
    this.columns = this._tableModel.columns;
    this.sortColumns();
    this.displayedColumns = this.columns.map((col) => col.key);
  }

  private sortColumns(): void {
    this.columns = sortBy(this.columns, ['order']);
  }
}
