import { TestBed } from '@angular/core/testing';
import { IssuesSearchActionsComponent } from 'src/app/core/components/search/issues-search/issues-actions/issues-search-actions.component';
import { UnprocessedSearchActionsComponent } from 'src/app/core/components/search/unprocessed-messages-search/unprocessed-actions/unprocessed-search-actions.component';

import { TypesMappingService } from './types-mapping.service';

describe('TypesMappingService', () => {
  let service: TypesMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('buildSupportedList and buildActions are called in ctor ', () => {
    const typesToCheck = [
      UnprocessedSearchActionsComponent,
      IssuesSearchActionsComponent,
    ];
    typesToCheck.forEach((element) => {
      const result = service.getEntry(element.name);
      expect(result).not.toBeNull();
      expect(result[0]).not.toBeNull();
      expect(result[1]).not.toBeNull();
    });
  });
});
