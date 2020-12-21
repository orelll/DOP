import { Component, Host, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnprocessedMessage } from 'src/app/shared/models/unprocessedMessage';
import { DialogClipboardService } from 'src/app/shared/services/dialog-clipboard/dialog-clipboard.service';
import { SpinnerService } from 'src/app/shared/services/spinner-service/spinner.service';
import { RepublishDialogComponent } from '../../dialogs/republish-dialog/republish-dialog.component';
import { UnprocessedMessagesSearchComponent } from '../../unprocessed-messages-search.component';
import { UnprocessedMessagesService } from '../unprocessed-messages.service';

@Component({
  selector: 'app-unprocessed-search-actions',
  templateUrl: './unprocessed-search-actions.component.html',
  styleUrls: ['./unprocessed-search-actions.component.css'],
})
export class UnprocessedSearchActionsComponent implements OnInit {
  message: UnprocessedMessage;

  constructor(
    public spinnerService: SpinnerService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private clipboard: DialogClipboardService,
    private messagesService: UnprocessedMessagesService
  ) {

  }

  ngOnInit(): void {}

  republishMessage(): void {
    console.log(`Called republish for ${this.message.id}`);

    this.clipboard.setClipboard('republish');

    const dialogRef = this.dialog.open(RepublishDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.spinnerService.setBusy(true);
        console.log(`archiving message with Id: ${this.message.id}`);
        this.messagesService.republishMessage(this.message.id);
        this.spinnerService.setBusy(false);
        this.snackBar.open('Message republished', 'ok', {
          duration: 2000,
        });
      }
    });
  }

  
}
