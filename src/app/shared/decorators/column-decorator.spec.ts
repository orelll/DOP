import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http-service';
import { Column, LogType } from './column-decorator';
import { tableSymbol } from '../decorators/column-decorator';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions.component';
import * as _ from 'lodash';
import { ColumnModel } from '../models/columnModel';

export class TestEntity {
  @Column({ name: 'STRINGPROPERTY', canSort: true })
  @LogType(String)
  stringProperty: string;

  @Column({ name: 'NUMBERPROPERTY', order: 1 })
  @LogType(Number)
  numberProperty: number;

  @Column({ name: 'DATEPROPERTY', canSort: true, order: 3 })
  @LogType(Date)
  dateProperty: Date;

  @Column({ name: 'ISSUESSEARCHACTIONSCOMPONENTPROPERTY' })
  @LogType(IssuesSearchActionsComponent)
  issuesSearchActionsComponentProperty: IssuesSearchActionsComponent;

  @Column({
    name: 'UNPROCESSEDSEARCHACTIONSCOMPONENTPROPERTY',
    canSort: true,
    order: 2,
  })
  @LogType(UnprocessedSearchActionsComponent)
  unprocessedSearchActionsComponent: UnprocessedSearchActionsComponent;
}

describe('IssueMessagesService', () => {
  let testEntity: TestEntity;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [HttpClient, HttpService],
    });

    testEntity = new TestEntity();
  });

  it('data schema can be created', () => {
    const dataSchema = testEntity[tableSymbol];
    expect(dataSchema).not.toBeNull();
  });

  it('data schema covers all required types', () => {
    const dataSchema = testEntity[tableSymbol];
    const columns = dataSchema.columns;

    columns.forEach((element) => {
      expect(element.key.toLowerCase()).toContain(
        element.propertyType.toLowerCase()
      );
    });
  });

  it('data schema covers all custom names', () => {
    const dataSchema = testEntity[tableSymbol];
    const columns = dataSchema.columns;

    columns.forEach((element) => {
      expect(element.name).toContain(element.key.toUpperCase());
    });
  });

  it('data schema covers sorting flag', () => {
    const dataSchema = testEntity[tableSymbol];
    const columns = dataSchema.columns;
    const expectedTrueColumns = _.filter(columns, (x) => x.canSort === true);
    const expectedFalseColumns = _.filter(columns, (x) => x.canSort === false);

    var sortableColumns = [
      'stringProperty',
      'dateProperty',
      'unprocessedSearchActionsComponent',
    ];
    var notSortableColumns = [
      'numberProperty',
      'issuesSearchActionsComponentProperty',
    ];

    sortableColumns.forEach((sortableColumn) => {
      var columnId = _.findIndex(expectedTrueColumns, {
        canSort: true,
        key: sortableColumn,
      });
      expect(columnId).toBeGreaterThanOrEqual(0);
    });

    notSortableColumns.forEach((notSortableColumn) => {
      var columnId = _.findIndex(expectedFalseColumns, {
        canSort: false,
        key: notSortableColumn,
      });
      expect(columnId).toBeGreaterThanOrEqual(0);
    });
  });

  it('data schema covers columns ordering', () => {
    const dataSchema = testEntity[tableSymbol];
    const columns = dataSchema.columns;

    const sortedColumns = columns.sort((n1, n2) => n1.order - n2.order);
    const columnsWithGivenOrder = _.filter(
      sortedColumns,
      (col: ColumnModel) => col.order > 0
    );
    const orderedProperties = [
      'numberProperty',
      'unprocessedSearchActionsComponent',
      'dateProperty',
    ];

    orderedProperties.forEach((column) => {
      const found = _.findIndex(columnsWithGivenOrder, { key: column });
      expect(found).toBeGreaterThanOrEqual(0);
    });
  });

  it('columns are unordered in default', () => {
    const dataSchema = testEntity[tableSymbol];
    const columns = dataSchema.columns;

    const sortedColumns = columns.sort((n1, n2) => n1.order - n2.order);

    const columnsWithoutGivenOrder = _.filter(
      sortedColumns,
      (col: ColumnModel) => col.order === 0
    );

    const unorderedColumns = [
      'stringProperty',
      'issuesSearchActionsComponentProperty',
    ];

    unorderedColumns.forEach((column) => {
      const found = _.findIndex(columnsWithoutGivenOrder, { key: column });
      expect(found).toBeGreaterThanOrEqual(0);
    });
  });
});
