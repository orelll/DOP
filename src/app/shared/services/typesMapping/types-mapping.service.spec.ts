import { TestBed } from '@angular/core/testing';

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
});
