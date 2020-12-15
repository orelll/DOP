import { TestBed } from '@angular/core/testing';

import { DialogClipboardService } from './dialog-clipboard.service';

describe('DialogClipboardService', () => {
  let service: DialogClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
