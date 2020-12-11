import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http-service';

import { UnprocessedMessagesService } from './unprocessed-messages.service';

describe('UnprocessedMessagesService', () => {
  let service: UnprocessedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule],
      providers: [HttpClient, HttpService],
    });
    service = TestBed.inject(UnprocessedMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
