import { TestBed } from '@angular/core/testing';

import { UnprocessedMessagesService } from './unprocessed-messages.service';

describe('UnprocessedMessagesService', () => {
  let service: UnprocessedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnprocessedMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
