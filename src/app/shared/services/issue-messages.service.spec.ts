import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http-service';

import { IssueMessagesService } from './issue-messages.service';

describe('IssueMessagesService', () => {
  let service: IssueMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [HttpClient, HttpService],
    });
    service = TestBed.inject(IssueMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
