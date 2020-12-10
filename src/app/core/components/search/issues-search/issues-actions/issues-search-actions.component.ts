import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IssueMessage } from 'src/app/shared/models/issueMessage';
import { IssueMessagesService } from 'src/app/shared/services';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { StackTraceThumbnailComponent } from '../stack-trace-thumbnail/stack-trace-thumbnail.component';

@Component({
  selector: 'app-issues-search-actions',
  templateUrl: './issues-search-actions.component.html',
  styleUrls: ['./issues-search-actions.component.css'],
})
export class IssuesSearchActionsComponent implements OnInit {
  message: IssueMessage;

  constructor(private issuesService: IssueMessagesService,public dialog: MatDialog,private clipboard: DialogClipboardService) {}

  ngOnInit(): void {}

  fetchStackTrace(): void {
    console.log(`Called for ${this.message.UUID}`);
    var stackTrace = this.issuesService.fetchStackTrace(this.message.UUID);
    this.clipboard.setClipboard(stackTrace);

    const dialogRef = this.dialog.open(StackTraceThumbnailComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
