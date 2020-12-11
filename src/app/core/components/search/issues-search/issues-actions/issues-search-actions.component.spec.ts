import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpService } from 'src/app/core/services/http-service';
import { IssueMessagesService } from 'src/app/shared/services';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';

import { IssuesSearchActionsComponent } from './issues-search-actions.component';

describe('IssuesSearchActionsComponent', () => {
  let component: IssuesSearchActionsComponent;
  let fixture: ComponentFixture<IssuesSearchActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesSearchActionsComponent ],
      imports:[HttpClientModule, MatDialogModule],
      providers:[ IssueMessagesService, HttpService, HttpClient, MatDialog, DialogClipboardService]
    })
    .compileComponents();
  });
//private issuesService: IssueMessagesService,public dialog: MatDialog,private clipboard: DialogClipboardService
  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
