import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpService } from 'src/app/core/services/http-service';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { UnprocessedMessagesService } from '../unprocessed-messages.service';

import { UnprocessedSearchActionsComponent } from './unprocessed-search-actions.component';

describe('UnprocessedSearchActionsComponent', () => {
  let component: UnprocessedSearchActionsComponent;
  let fixture: ComponentFixture<UnprocessedSearchActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnprocessedSearchActionsComponent],
      imports: [MatDialogModule, HttpClientModule],
      providers: [
        MatDialog,
        DialogClipboardService,
        UnprocessedMessagesService,
        HttpService,
        HttpClient
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedSearchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
