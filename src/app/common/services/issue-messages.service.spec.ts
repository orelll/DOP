import { TestBed } from '@angular/core/testing';

import { IssueMessagesService } from './issue-messages.service';

describe('IssueMessagesService', () => {
  let service: IssueMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
